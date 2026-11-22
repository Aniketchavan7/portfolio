# Core Web Vitals Optimization Guide

## Target Metrics
- **Largest Contentful Paint (LCP)**: < 0.8s
- **Interaction to Next Paint (INP)**: < 50ms
- **Cumulative Layout Shift (CLS)**: 0.000

## Optimizations Implemented
- Self-hosted Inter font subsets via `next/font` eliminating render-blocking network requests.
- Inline critical SVGs and AVIF image compression.
- Edge caching with stale-while-revalidate headers on Vercel CDN.
