# Beauty of Geomorphology — updated website

This is a static HTML/CSS/JavaScript update designed for the existing GitHub + Cloudflare Pages project.

## What's included
- `index.html` — redesigned home page with six topic cards.
- `topic.html` — a reusable learning page that loads the correct topic based on the URL.
- `style.css` — responsive design for desktop and mobile.
- `script.js` — six topic guides, overview text, processes, landforms, book/author references, and resource links.

## How topic pages work
Each topic card opens a dedicated URL such as:
- `topic.html?topic=fluvial`
- `topic.html?topic=glacial`
- `topic.html?topic=aeolian`
- `topic.html?topic=coastal`
- `topic.html?topic=weathering`
- `topic.html?topic=tectonic`

The pages are rendered from `script.js`; you do not need to create six separate HTML files to have six distinct topic pages.

## Update your existing GitHub repository
1. Download and extract this ZIP on your computer.
2. Open your existing GitHub repository.
3. Upload/replace `index.html`, `style.css`, `script.js`, and `topic.html` in the repository root. Keep `README.md` if you want.
4. Commit the changes.
5. Cloudflare Pages should automatically redeploy if GitHub integration is enabled. Wait for deployment to finish, then refresh your public website. If it still shows the old page, hard-refresh the browser (Ctrl+F5).

## Important notes
- Video and image sections use topic-specific search links rather than copying other creators' videos or images into the website.
- Check image licensing and attribution before reusing any image on your own pages.
- Book titles, authors and editions should be verified through a library catalogue or publisher before formal academic citation.
- The research area links to Google Scholar, Semantic Scholar, Crossref, OpenAlex, NPTEL/SWAYAM and MIT OpenCourseWare. These are search/resource links, not a live AI research chatbot.
- This is a static website. Login, saved student progress, exams with score storage, and a live AI chatbot require additional backend functionality.
