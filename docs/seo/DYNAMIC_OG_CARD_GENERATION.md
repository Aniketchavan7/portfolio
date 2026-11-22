# SEO Specification: Dynamic OpenGraph Card Generation

## 1. Edge Generation
Dynamic OG images generated on-demand at edge nodes via `@vercel/og`:
- Renders responsive SVG typography with project title, language breakdown, and live GitHub stars badge.
- Edge response cached at CDN layer with 7-day TTL and `stale-while-revalidate`.
