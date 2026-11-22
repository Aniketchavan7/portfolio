# Architecture: Progressive Web App & Offline Caching Strategy

## 1. Service Worker Caching Layers
- **Stale-While-Revalidate**: Applied to HTML pages and project showcase metadata.
- **Cache-First**: Static CSS, JavaScript bundles, and web fonts (`/_next/static/`).
- **Network-First**: Dynamic GitHub star and contribution telemetry APIs.
