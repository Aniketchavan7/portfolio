# NoSpoti portfolio landing

This page preserves the original NoSpoti dark/lime design and its local mockup images. It is independent of the music repository's `landing/index.html`.

Edit `landing.source.html` for markup/copy and `nospoti.css` for page-specific adjustments. `LandingExperience.tsx` owns the audio preview and mobile showcase interactions, with cleanup on unmount.

Run `npm run landing:nospoti` after editing the source HTML. The generator renders local Lucide SVGs, rejects executable HTML, writes the trusted generated markup, and compiles Tailwind utilities scoped to `.nospoti-landing`. `prebuild` repeats generation automatically. No Tailwind or icon CDN script runs on this page.

`landing.generated.json` and `landing.utilities.css` are generated files. Images and demo audio live in `public/assets/nospoti/legacy/`.

The page is statically rendered for SEO. The original hero/mobile artwork is described as design mockups. Public features and experimental MCP availability are distinguished in the copy.
