# Nirvania.ai website

Production-ready Next.js App Router site for Nirvania.ai, styled with Tailwind CSS 4. The site includes a responsive product landing page and a technical overview at `/docs`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Import `IAGGDEV/Nirvaniaai_Website_V1` in Vercel and select the `main` branch.
2. Keep the detected Next.js framework preset and default build settings.
3. Add the production domain in Vercel project settings, then configure the DNS records shown there at your registrar.
4. Deploy. Vercel will create preview deployments for branches and production deployments from `main`.

The project does not need a `vercel.json` file or environment variables for the current static site. The early access links open an email draft; no form data is collected by this site.

## Content to verify before launch

- Replace the Founder LinkedIn search link in `app/page.tsx` with the founder's public profile URL.
- Confirm the technology list still reflects the selected/current stack.
- Confirm location and contact email are correct.
- The workflow diagram and documentation describe product direction, not a live customer deployment or production integration.

Application drafting notes for the Anthropic Claude Startups program are in `docs/anthropic-startups-application.md`.
