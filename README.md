# RUET GIS Club — Official Website

Static site for RUET GIS Club (Rajshahi University of Engineering & Technology).
No build step, no server — just HTML, CSS, and JS. Built to be hosted free on **GitHub Pages**.

## 1. Launching it on GitHub Pages

1. Create a new GitHub repository (e.g. `ruet-gis-club` or `ruetgisclub.github.io` if you want it under an
   organization root).
2. Upload every file in this folder to the repository (keep the `Assets/` folder as-is).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**.
5. Save. GitHub gives you a live URL in about a minute (something like
   `https://<your-username>.github.io/<repo-name>/`).
6. Every time anyone edits a file and commits it, the live site updates automatically within ~1 minute.

No terminal, no npm install, no database — GitHub Pages just serves the files as they are.

## 2. Folder guide

| File | What it's for |
|---|---|
| `index.html` | Home page |
| `about.html` | Mission & objectives |
| `members.html` | Advisors, EC, past committees, general members, alumni |
| `member.html` | Template that renders **one** EC member's profile (via `?slug=`) |
| `notices.html` | Notice board |
| `resources.html` | Datasets, software, recorded sessions |
| `activities.html` | Workshops & events log |
| `constitution.html` | Full club constitution |
| `404.html` | Shown for broken links |
| `data.js` | **All the content that changes often** — edit this, not the HTML |
| `script.js` | Renders `data.js` into each page — you shouldn't need to touch this |
| `styles.css` | Design system (colors, type, layout) |
| `Assets/` | Logo, favicon, and (add your own) member photos |

## 3. How an EC member edits their own profile (no coding needed)

1. Open the repository on GitHub in a browser.
2. Click into `data.js`, then click the pencil icon (Edit this file) in the top right.
3. Use Ctrl+F / Cmd+F to find your name inside the `CURRENT_EC` list.
4. Edit only the text **between the quotes** for your own fields:
   - `bio`: a short paragraph about yourself.
   - `email`, `linkedin`: your links.
   - `batch`: e.g. `"URP'21 Series"`.
   - `photo`: see step 5 below.
5. To add a photo:
   - Take a square-ish photo, save it small (under ~500 KB).
   - Upload it into `Assets/ec/` (create that folder if it isn't there yet, via "Add file → Upload files").
   - Set your `photo` field to `"Assets/ec/your-file-name.jpg"`.
6. Scroll down, write a short commit message (e.g. "Add my bio and photo"), and click **Commit changes**.
7. Wait about a minute — your profile page at
   `member.html?slug=your-slug` and the Members page will both update automatically.

Don't delete commas, quotes, or curly braces `{ }` — if the page looks broken after a save, it's almost
always a missing comma or quote. Undo the change and try again.

## 4. Adding a new notice, activity, or resource

Open `data.js` and add a new line inside the matching list (`NOTICES`, `ACTIVITIES`, or `RESOURCES`),
copying the pattern of the line above it. Same rule: don't remove commas or braces.

## 5. Updating the Executive Committee next year

When a new committee is selected:
1. Move the outgoing committee into `PAST_COMMITTEES` as a new group (copy the format already there).
2. Replace the `CURRENT_EC` list with the new committee.
3. Update `SITE.session` (e.g. `"2027 - 28"`).

## 6. Design system quick reference

Colors, fonts, and spacing all live as CSS variables at the top of `styles.css` (look for `:root`).
Brand colors are pulled directly from the club logo (orange pin, green fold, sky blue, amber).
