# Portfolio — Rishikumar Mathiazhagan

A single-page Next.js portfolio with a dark/light toggle, blue theme, project tabs,
and your resume wired in. Everything you'll normally edit lives in **one file**:
`app/page.js` (content) and **one block** in `app/globals.css` (colors).

---

## 1. Requirements

Next.js needs **Node 18 or newer**. Your container has Node 12.4.0, which won't work.
Bump it first:

**If you control the Dockerfile**, set the base image to:
```dockerfile
FROM node:20
```

**If you're inside a running container**, use nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 20 && nvm use 20
node -v   # should print v20.x
```
Your Git 2.46.0 is fine.

---

## 2. Run it locally

From the project folder:
```bash
npm install
npm run dev
```
Open http://localhost:3000 — you'll see the site live. It hot-reloads as you edit.

---

## 3. Customize

| What | Where |
|------|-------|
| Name, bio, email, links | `app/page.js` → `profile` object (top) |
| **Your GitHub URL** | `app/page.js` → `profile.github` (currently a placeholder) |
| Your photo | drop a file in `public/`, then set `profile.picture` (e.g. `"/me.jpg"`) |
| Skills | `app/page.js` → `skills` array |
| Work history | `app/page.js` → `experience` array |
| Education | `app/page.js` → `education` array |
| **Add a project** | `app/page.js` → `projects` array — copy a block, edit it. Tabs auto-update. |
| Colors | `app/globals.css` → top color block (dark + light themes) |
| Resume PDF | replace `public/resume.pdf` with your latest |

Your current resume PDF is already in `public/resume.pdf`, so the Download button works now.
The photo is a placeholder ("RM" on a blue gradient) until you drop in a real one.

---

## 4. Deploy to Vercel

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to vercel.com → **New Project** → import the repo → **Deploy**.
   Vercel auto-detects Next.js. No settings needed.

That's it — you'll get a live URL.
# Portfolio
