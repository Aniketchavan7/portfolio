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
  url: string;
  tags: string[];
};

const INITIAL_NEWS: NewsItem[] = [];

const CATEGORIES = [
  "All",
  "AI & ML",
  "Software Engineering",
  "System Design",
  "Web Dev",
  "Cloud & DevOps",
];

export default function TechNewsPage() {
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sourceTag, setSourceTag] = useState("Daily Tech Digest");

  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/news");
      if (!res.ok) throw new Error('News unavailable');
      const data = await res.json();
      if (data.success && Array.isArray(data.news)) {
        setNews(data.news);
        setSourceTag("Source-linked · AI-assisted"); setUpdatedAt(data.updatedAt);
      }
    } catch {
      setError(true);
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
            <span className="text-xs text-muted-foreground">{updatedAt ? `Published ${updatedAt.slice(0, 10)}` : "Awaiting first digest"}</span>
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
          {loading ? "Loading..." : "Refresh News"}
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
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground/80 underline underline-offset-4">{item.source}<ExternalLink className="h-3 w-3" /><span className="sr-only"> (opens in a new tab)</span></a>
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
          <h3 className="text-lg font-medium">{error ? "News is temporarily unavailable" : loading ? "Loading news" : "No published news matches"}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Daily digests appear here after publication. Each item links to its original source.
          </p>
        </div>
      )}
    </div>
  );
}
