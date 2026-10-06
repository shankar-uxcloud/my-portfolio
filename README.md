# P Shankar — Premium Developer Portfolio

> A cinematic React + Vite portfolio showcasing my projects, skills, experience, certifications, achievements, GitHub work, and resume.

## 🌐 Live Portfolio

### 🚀 Visit My Portfolio

**https://shankar-uxcloud.github.io/my-portfolio/**

## ✨ Highlights

- Premium dark cinematic interface
- Responsive React + Vite architecture
- Animated page transitions and interactions
- Projects and technical work showcase
- Experience and internship timeline
- Certifications with credential details
- GitHub profile and project section
- Achievements showcase
- Dedicated resume viewer and download
- Contact / Let's Talk section

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React
- JavaScript
- Git & GitHub

## 🚀 Run Locally

```bash
git clone https://github.com/shankar-uxcloud/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

## Portfolio Visitor Insights

The portfolio visitor counter uses **Supabase** as a free, persistent backend.
The browser stores only a random anonymous visitor UUID; no names, emails,
passwords, IP addresses, or user accounts are collected.

### Required environment variables

Create a local `.env` file from [.env.example](./.env.example):

```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

Only the public Supabase URL and anon key belong in the frontend. Never use a
service-role key in `.env`, source code, or GitHub Pages settings.

### Supabase database setup

1. Create a Supabase project.
2. Open **SQL Editor** in the Supabase dashboard.
3. Run the complete script in
   [`supabase/visitor-counter.sql`](./supabase/visitor-counter.sql).
4. Copy the project URL and anon/public key into `.env` locally and into the
   GitHub repository's **Settings → Secrets and variables → Actions →
   Variables** as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

The script creates one anonymous visitor row per browser UUID, enables RLS,
removes direct table access, and exposes only a narrowly scoped RPC function.
The function updates the last-seen timestamp, counts unique total and daily
visitors, and considers visitors active for five minutes for the live metric.
The client refreshes that live metric once per minute. A local browser key and
the database primary key prevent page refreshes from artificially increasing
the visitor count.

If the variables are missing or Supabase is unavailable, the portfolio remains
usable and the component displays “Visitor statistics unavailable” instead of
fake or broken values.

### Run and deploy

```bash
npm run dev
npm run build
```

GitHub Pages receives the generated static site from the existing deployment
workflow. Configure the two `VITE_` repository variables before a deployment;
Vite embeds only those public values at build time. Supabase stores the
anonymous aggregate data independently of GitHub Pages.
