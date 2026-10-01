# Apps section

The original portfolio remains intact. The header Apps button and menu entry open `/apps`.

- `/apps`: directory for Winter Arc, RentalGO, and Insurance Claim Engine.
- `/apps/winterarc`: Winter Arc landing page and Android download.
- `/apps/claim-decision-engine`: claim-engine landing page with a Try Claim Engine link to https://aniketnew7-claim-decision-engine.hf.space/.
- RentalGO opens https://www.rentalgo.in/ directly.

App records and release URLs are in `src/data/apps.ts`. The linked Winter Arc APK is v1.0.2, the latest documented build on origin/main (54d8390) when checked on 2026-10-01. The hosted APK was downloaded for verification and matched SHA-256 43F409C9D1B7646E1215519F5490D81DDF728EA9DCFE41CAE48B6B9F4AB5860C. The download button uses the existing app host rather than duplicating the binary in this repository.

All app CSS is scoped to its page class to avoid affecting the portfolio. The Apps directory uses the portfolio's Unbounded headings, Space Grotesk body type, monochrome theme tokens, and saved light/dark preference. Product landing pages retain their own branding. App pages bypass the portfolio's decorative overlays and 3D preloader. The original homepage sections, fonts, theme configuration, dependencies, and global styles are unchanged.

For a later APK release, update `winterArc.version`, `downloadUrl`, and `sha256` together after verifying the new hosted file.
