"use client";

import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  RefreshCw,
  Search,
  Clock,
  Calendar,
  ExternalLink,
  Newspaper,
  Terminal,
  Cpu,
  Layers,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type NewsItem = {
  id: string;
  title: string;
  category: string;
  summary: string;
  date: string;
  readTime: string;
  source: string;
  tags: string[];
};

const INITIAL_FALLBACK_NEWS: NewsItem[] = [
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

const CATEGORIES = [
  "All",
  "AI & ML",
  "Software Engineering",
  "System Design",
  "Web Dev",
  "Cloud & DevOps",
];

export default function TechNewsPage() {
  const [news, setNews] = useState<NewsItem[]>(INITIAL_FALLBACK_NEWS);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sourceTag, setSourceTag] = useState("Curated Live Feed");

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (data.success && data.news && data.news.length > 0) {
        setNews(data.news);
        setSourceTag(data.source === "gemini-api" ? "Powered by Gemini AI" : "Curated Tech Digest");
      }
    } catch (err) {
      console.warn("Failed to fetch news from API route, using fallback feed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filteredNews = news.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border/50 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="gap-1.5 px-3 py-1 border-primary/30 text-primary bg-primary/10">
              <Sparkles className="w-3.5 h-3.5" />
              {sourceTag}
            </Badge>
            <span className="text-xs text-muted-foreground">Updated Realtime</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
            Tech &amp; SDE <span className="text-primary">News Digest</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
            Latest updates on Software Development, AI System Design, Cloud Engineering, and Computer Science.
          </p>
        </div>

        <Button
          onClick={fetchNews}
          disabled={loading}
          variant="outline"
          className="gap-2 shrink-0 border-primary/30 hover:bg-primary/10"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Generating News..." : "Refresh News"}
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search news by keyword, topic, or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background/50 border-border/60"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="rounded-full text-xs shrink-0"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item, idx) => (
              <motion.div
                key={item.id || idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group flex flex-col justify-between border border-border/60 bg-card/30 backdrop-blur-sm rounded-xl p-6 hover:border-primary/40 hover:bg-card/60 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant="secondary" className="text-[11px] font-medium">
                      {item.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4 font-sans">
                    {item.summary}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground/80">{item.source}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed border-border rounded-xl">
          <Newspaper className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium">No tech news found</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Try adjusting your search query or selected category filter.
          </p>
        </div>
      )}
    </div>
  );
}
