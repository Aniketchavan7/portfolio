# Architecture: Next.js 15 App Router & Server Components

## 1. Server Components vs Client Boundaries
- Route layouts and static showcase lists remain pure React Server Components (RSC) with zero client bundle impact.
- Interactive interactive controls (theme toggles, modal dialogs) isolated into leaf client components with `'use client'`.
- Data fetching performed directly in asynchronous server components with granular revalidation tags.
