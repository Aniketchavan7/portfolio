# Apps section

The portfolio keeps its existing theme and interactive keyboard. The header Apps button, hero Explore Apps button, and menu entry open `/apps`. The homepage also includes a compact My Apps showcase using the same app records.

- `/apps`: directory for Winter Arc, RentalGO, and Insurance Claim Engine.
- `/apps/winterarc`: Winter Arc landing page and Android download.
- `/apps/claim-decision-engine`: claim-engine landing page with a Try Claim Engine link to https://aniketnew7-claim-decision-engine.hf.space/.
- RentalGO opens https://www.rentalgo.in/ directly.

App records and release URLs are in `src/data/apps.ts`. The linked Winter Arc APK is v1.0.2, the latest documented build on origin/main (54d8390) when checked on 2026-10-01. The hosted APK was downloaded for verification and matched SHA-256 43F409C9D1B7646E1215519F5490D81DDF728EA9DCFE41CAE48B6B9F4AB5860C. The download button uses the existing app host rather than duplicating the binary in this repository.

All app CSS is scoped to its page class to avoid affecting the portfolio. The Apps directory uses the portfolio's Unbounded headings, Space Grotesk body type, monochrome theme tokens, and saved light/dark preference. Product landing pages retain their own branding. App pages bypass the portfolio's decorative overlays and 3D preloader. Homepage refinements use scoped `home.css`, show the introduction without waiting for the keyboard, add the About anchor, and present project summaries with real site captures where available. Fonts, theme tokens, dependencies, and global styles remain unchanged.

For a later APK release, update `winterArc.version`, `downloadUrl`, and `sha256` together after verifying the new hosted file.
