# Daily automatic publishing

The website already has `/blogs` and `/news`. The daily workflow creates one original, AI-assisted educational blog and 3–6 short news summaries, then commits the content and requests a Vercel deployment. No manual editorial approval is required.

## Activate once

1. Merge the code into the repository default branch (`main`). Scheduled Actions run from the default branch. Ensure this is also your Vercel production branch.
2. In GitHub → repository Settings → Secrets and variables → Actions, add `GEMINI_API_KEY`. Get a key from https://aistudio.google.com/apikey. Never use a `NEXT_PUBLIC_` variable for it.
3. In Vercel → project Settings → Git → Deploy Hooks, create a hook targeting the production branch. Save its URL as the GitHub Actions secret `VERCEL_DEPLOY_HOOK`. Treat that URL as a credential.
4. Ensure repository Actions policies permit this workflow and `contents: write`. Branch protection must allow the bot's content commit; if it prohibits direct pushes, use a narrowly scoped GitHub App integration instead of disabling protections broadly.
5. GitHub → Actions → Publish daily blog and news → Run workflow. Verify its run and the resulting production deployment in Vercel before relying on the schedule.

Schedule: daily at 03:30 UTC / 09:00 India time. GitHub may delay scheduled jobs; inactive public repositories may have scheduled workflows disabled. Set repository Actions variable `GEMINI_MODEL` to override the existing `gemini-2.5-flash` default if needed for your API account. API usage follows your provider's quota and billing.

## How publication works

- Fetch allowlisted RSS feeds from GitHub, Cloudflare and Hugging Face. Use actual publication dates within the last seven days and source URLs, never model-invented links.
- Exclude previously published news URLs. One edition per India calendar day; retrying an existing edition does not create another blog.
- Generate a focused article and short summaries from the source excerpts. Existing blog titles are supplied to avoid repeated topics.
- Validate structure, source IDs, duplicate IDs, word count and plain text. A separate AI editorial check rejects unsupported claims, copied text and fabricated personal experience. These checks reduce errors but do not guarantee factual accuracy.
- Generate MDX from validated plain text, with a visible AI-assisted disclosure and sources. Never execute model-provided JSX or imports.
- Run tests and the production build before committing only `src/content/blogs` and `src/content/news`.
- Push without force. If the branch advanced or protections reject the push, the run fails safely.
- Request Vercel deployment using its deploy hook. Acceptance is not deployment completion: verify in Vercel. A rerun also retries the hook even when that day's content already exists.

No key, too little source material, malformed output or a failed editorial check produces no new publication. Existing content stays available. The news page no longer presents placeholder stories as “Today.” Historical editions live under `src/content/news/archive`; the website displays the latest edition.

## Local checks

- `npm ci --legacy-peer-deps` (the existing app has React peer dependency conflicts)
- `npm run test:content`
- `npm run content:sources` — fetch sources only, no AI calls or file writes
- `npm run content:publish` — uses `GEMINI_API_KEY` or local `GOOGLE_API_KEY`, writes content but does not commit or deploy
- `npm run build` — requires the existing contact form's `RESEND_API_KEY`; CI uses a nonfunctional build-only placeholder, not an email credential

Disable the workflow in GitHub Actions to pause publication. Remove an unwanted blog and update the news JSON in a normal commit to retract content; retain the archive for deduplication.

References: https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule and https://vercel.com/docs/deploy-hooks
