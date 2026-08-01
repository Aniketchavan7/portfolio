import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Act as a senior tech journalist. Generate 8 latest trending technology, software engineering (SDE), IT, AI, and cloud computing news items in strict JSON format. 
Return a JSON array of objects, where each object has:
- id: string (unique)
- title: string (catchy news title)
- category: string ("AI & ML", "Software Engineering", "Cloud & DevOps", "Web Dev", "System Design")
- summary: string (2-3 sentences summary of the news)
- date: string (e.g. "Today", "1 day ago")
- readTime: string (e.g. "3 min read")
- source: string (e.g. "TechCrunch", "GitHub Blog", "Hacker News", "InfoQ")
- tags: array of strings

Do not wrap in markdown codeblocks if possible, or plain JSON array only.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      let rawText = data.candidates[0].content.parts[0].text.trim();
      if (rawText.startsWith("```json")) {
        rawText = rawText.replace(/^```json/, "").replace(/```$/, "").trim();
      } else if (rawText.startsWith("```")) {
        rawText = rawText.replace(/^```/, "").replace(/```$/, "").trim();
      }
      const parsedNews = JSON.parse(rawText);
      return NextResponse.json({ success: true, source: "gemini-api", news: parsedNews });
    }
  } catch (err) {
    console.warn("Gemini API call failed, using fallback tech news feed:", err);
  }

  // High quality fallback SDE & Tech news feed
  const fallbackNews = [
    {
      id: "news-1",
      title: "Generative AI System Design: Moving Beyond Chains to Autonomous Graphs",
      category: "AI & ML",
      summary: "Software engineers are adopting state-graph orchestration like LangGraph and AutoGen for building self-correcting multi-agent production pipelines.",
      date: "Today",
      readTime: "4 min read",
      source: "AI Engineering Monthly",
      tags: ["AI System Design", "LangGraph", "LLMs"],
    },
    {
      id: "news-2",
      title: "Java 22 & Virtual Threads Reshape High-Throughput Microservice Architecture",
      category: "Software Engineering",
      summary: "Project Loom's lightweight threads are enabling Spring Boot and enterprise Java applications to serve 10x concurrent IO requests with dramatically lower RAM overhead.",
      date: "Today",
      readTime: "5 min read",
      source: "InfoQ",
      tags: ["Java", "Spring Boot", "Concurrency"],
    },
    {
      id: "news-3",
      title: "Next.js 15 & React 19 Upgrade Guide: Async Request APIs & Compiler Optimizations",
      category: "Web Dev",
      summary: "React 19 introduces automatic memoization via React Compiler alongside Server Actions, transforming frontend rendering performance.",
      date: "1 day ago",
      readTime: "3 min read",
      source: "GitHub Tech Digest",
      tags: ["React 19", "Next.js", "Frontend"],
    },
    {
      id: "news-4",
      title: "Vector Database Benchmark 2025: Qdrant, ChromaDB, and Pinecone Compared",
      category: "System Design",
      summary: "A comprehensive benchmark analyzing vector retrieval latency, HNSW indexing speeds, and memory footprints for production RAG systems.",
      date: "1 day ago",
      readTime: "6 min read",
      source: "Database Engineering Insider",
      tags: ["VectorDB", "ChromaDB", "RAG"],
    },
    {
      id: "news-5",
      title: "The Rise of Rust & C++ in High-Frequency Trading & Low-Latency Infrastructure",
      category: "Software Engineering",
      summary: "Algorithmic trading systems continue shifting toward memory-safe zero-cost abstractions to eliminate garbage collection pauses in execution engines.",
      date: "2 days ago",
      readTime: "4 min read",
      source: "Hacker News",
      tags: ["C++", "Algorithmic Trading", "Low Latency"],
    },
    {
      id: "news-6",
      title: "Kubernetes & Cloud-Native Security: Zero Trust Mesh for Enterprise APIs",
      category: "Cloud & DevOps",
      summary: "DevOps teams are standardizing on eBPF-based service meshes like Cilium to enforce microservice network security without sidecar proxies.",
      date: "3 days ago",
      readTime: "5 min read",
      source: "Cloud Native Computing",
      tags: ["Kubernetes", "DevOps", "Security"],
    },
  ];

  return NextResponse.json({ success: true, source: "curated-feed", news: fallbackNews });
}
