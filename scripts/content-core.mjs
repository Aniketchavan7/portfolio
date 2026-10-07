import { XMLParser } from 'fast-xml-parser';
import { z } from 'zod';

export const feeds = [
  { name: 'GitHub Blog', url: 'https://github.blog/feed/', host: 'github.blog' },
  { name: 'Cloudflare Blog', url: 'https://blog.cloudflare.com/rss/', host: 'blog.cloudflare.com' },
  { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml', host: 'huggingface.co' },
];
export const categories = ['AI & ML', 'Software Engineering', 'System Design', 'Web Dev', 'Cloud & DevOps'];
const text = (min, max) => z.string().trim().min(min).max(max).refine(s => !/[<>{}`\[\]\\\r\n]/.test(s) && !/https?:\/\//i.test(s) && !/^(import|export)\b/.test(s), 'Use plain text without markup or URLs');
export const editionSchema = z.object({
  news: z.array(z.object({
    sourceId: z.string(), summary: text(60, 550), category: z.enum(categories), tags: z.array(text(2, 30)).min(1).max(3),
  }).strict()).min(3).max(6),
  blog: z.object({
    title: text(15, 120), summary: text(60, 220), tags: z.array(text(2, 30)).min(1).max(4),
    sections: z.array(z.object({ heading: text(5, 100), paragraphs: z.array(text(80, 1000)).min(1).max(3) }).strict()).min(3).max(5),
    sourceIds: z.array(z.string()).min(3).max(6),
  }).strict(),
}).strict();
export function plain(value) {
  return String(value ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
export function parseFeed(xml, feed, now = new Date()) {
  const doc = new XMLParser({ ignoreAttributes: false, processEntities: false }).parse(xml);
  const entries = doc.rss?.channel?.item ?? doc.feed?.entry ?? [];
  return (Array.isArray(entries) ? entries : [entries]).flatMap(item => {
    const links = Array.isArray(item.link) ? item.link : [item.link];
    const link = links.find(x => typeof x === 'string' || x?.['@_rel'] === 'alternate') ?? links[0];
    const rawUrl = typeof link === 'string' ? link : link?.['@_href'];
    try {
      const url = new URL(rawUrl);
      if (url.protocol !== 'https:' || url.hostname !== feed.host) return [];
      url.hash = ''; url.search = '';
      const published = new Date(item.pubDate ?? item.published ?? item.updated);
      if (!Number.isFinite(published.getTime()) || published > now || now - published > 7 * 86400000) return [];
      const title = plain(item.title?.['#text'] ?? item.title);
      const excerpt = plain(item['content:encoded'] ?? item.description ?? item.summary?.['#text'] ?? item.summary ?? item.content?.['#text'] ?? item.content).slice(0, 10000);
      if (!title || excerpt.length < 100) return [];
      return [{ title, url: url.href, date: published.toISOString().slice(0, 10), source: feed.name, excerpt }];
    } catch { return []; }
  });
}
export function validateEdition(raw, sources, existingTitles = []) {
  const result = editionSchema.parse(raw);
  const ids = new Set(sources.map(s => s.id));
  const newsIds = result.news.map(n => n.sourceId);
  if (new Set(newsIds).size !== newsIds.length || new Set(result.blog.sourceIds).size < 3) throw new Error('Duplicate source IDs');
  for (const id of [...newsIds, ...result.blog.sourceIds]) if (!ids.has(id)) throw new Error('Unknown source ID');
  if (existingTitles.some(t => t.toLowerCase() === result.blog.title.toLowerCase())) throw new Error('Duplicate blog title');
  const words = result.blog.sections.flatMap(s => s.paragraphs).join(' ').split(/\s+/).length;
  if (words < 400 || words > 850) throw new Error('Blog must contain 400–850 words');
  return result;
}
export function renderBlog(blog, sources, date) {
  const frontmatter = { title: blog.title, publishedAt: date, summary: blog.summary, author: 'Portfolio editorial · AI-assisted', tags: blog.tags };
  const head = Object.entries(frontmatter).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n');
  const body = blog.sections.map(s => `## ${s.heading}\n\n${s.paragraphs.join('\n\n')}`).join('\n\n');
  const citations = blog.sourceIds.map(id => sources.find(s => s.id === id)).map(s => `- [${s.source} — ${s.date}](${s.url})`).join('\n');
  return `---\n${head}\n---\n\nAutomatically published, AI-assisted editorial based on the sources below.\n\n${body}\n\n## Sources\n\n${citations}\n`;
}



