# Beauty of Geomorphology

A static starter website focused on geomorphology video learning and research-source discovery.

## Files
- `index.html` — page structure and sections
- `style.css` — responsive visual design
- `script.js` — mobile navigation and source-search chatbot demo

## Deploy on Cloudflare Pages
1. Upload these three files to the root of your GitHub repository.
2. In Cloudflare, use **Workers & Pages** and connect the repository as a **Pages** project (static site).
3. For a plain HTML site, leave the build command empty and set the build output directory to `/` or the repository root if the dashboard allows it.
4. If the existing project is a **Worker** deployment running `npx wrangler deploy`, do not use that configuration for this static-site setup. Create a Pages project or configure static assets properly.
5. Every new commit to the connected branch can trigger a deployment.

## Important
The chatbot in this starter is a source-search demo. It opens searches in Wikipedia, Semantic Scholar and Crossref; it does not yet call an AI model or claim to produce verified citations. A real AI research chatbot needs a backend, API credentials stored as server-side secrets, and retrieval/citation validation. Do not put API keys in browser JavaScript.
