import test from 'node:test';
import assert from 'node:assert/strict';
import { parseFeed, validateEdition, renderBlog } from './content-core.mjs';
const feed = { name: 'Example', host: 'example.com' };
const now = new Date('2026-10-06T12:00:00Z');
const entry = (url, date) => `<item><title>Release</title><link>${url}</link><pubDate>${date}</pubDate><description>${'Some source details. '.repeat(10)}</description></item>`;
test('feeds exclude stale, future, off-domain and non-HTTPS entries', () => {
  const xml = `<rss><channel>${entry('https://example.com/release', '2026-10-05')}${entry('https://example.com/old', '2025-01-01')}${entry('https://example.com/future', '2026-10-07')}${entry('https://evil.example/post', '2026-10-05')}${entry('http://example.com/post', '2026-10-05')}</channel></rss>`;
  assert.equal(parseFeed(xml, feed, now).length, 1);
});
const sources = ['a', 'b', 'c'].map(id => ({ id, url: `https://example.com/${id}`, source: 'Example', date: '2026-10-05' }));
const fixture = () => ({ news: sources.map(s => ({ sourceId: s.id, summary: 'A sourced summary that explains the practical implications of a new release.', category: 'Web Dev', tags: ['Web'] })), blog: { title: 'Understanding release tradeoffs', summary: 'An educational discussion of release tradeoffs and the checks developers can apply.', tags: ['Web'], sections: sources.map(() => ({ heading: 'Practical checks', paragraphs: Array.from({ length: 2 }, () => ('Developers should examine documented changes before deciding whether to adopt a release. '.repeat(6)).trim()) })), sourceIds: ['a', 'b', 'c'] } });
test('valid edition renders explicit disclosure and source links', () => {
  const edition = validateEdition(fixture(), sources);
  const mdx = renderBlog(edition.blog, sources, '2026-10-06');
  assert.match(mdx, /AI-assisted/); assert.match(mdx, /https:\/\/example.com\/a/);
});
test('unknown citations and duplicate stories fail closed', () => {
  const a = fixture(); a.news[0].sourceId = 'invented'; assert.throws(() => validateEdition(a, sources));
  const b = fixture(); b.news[0].sourceId = 'b'; assert.throws(() => validateEdition(b, sources));
});
test('generated executable MDX and repeated blog titles are rejected', () => {
  const a = fixture(); a.blog.sections[0].paragraphs[0] = '<script>bad</script>'; assert.throws(() => validateEdition(a, sources));
  assert.throws(() => validateEdition(fixture(), sources, ['Understanding release tradeoffs']));
  const b = fixture(); b.blog.sections[0].paragraphs[0] = 'import thing from ' + 'x'.repeat(100); assert.throws(() => validateEdition(b, sources));
});


