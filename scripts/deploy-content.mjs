const hook = process.env.VERCEL_DEPLOY_HOOK;
if (!hook) throw new Error('VERCEL_DEPLOY_HOOK is missing');
const url = new URL(hook);
if (url.protocol !== 'https:' || url.hostname !== 'api.vercel.com' || !url.pathname.startsWith('/v1/integrations/deploy/')) throw new Error('Expected a Vercel deploy hook');
const response = await fetch(url, { method: 'POST', redirect: 'error', signal: AbortSignal.timeout(30000) });
if (!response.ok) throw new Error(`Vercel deploy request failed: HTTP ${response.status}`);
const result = await response.json();
if (!result.job?.id) throw new Error('Vercel did not return a deployment job');
console.log('Vercel accepted the deployment request. Check the Vercel dashboard for build completion.');
