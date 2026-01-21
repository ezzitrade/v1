# EZZI.trade — Ultra AAA Landing

Single-page landing for **EZZI WORLD**.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Vercel

1) Export this project to GitHub
2) Import the repo into Vercel
3) Add env vars below (Project Settings → Environment Variables)
4) Deploy

### Environment variables

**Access requests (Discord webhook):**
- `EZZI_ACCESS_WEBHOOK_URL` (recommended)

**Optional: social links overrides**
- `NEXT_PUBLIC_X_URL`
- `NEXT_PUBLIC_DISCORD_URL`
- `NEXT_PUBLIC_TELEGRAM_URL`

## Assets

Place assets in `/public`:
- `/public/maps/map-hero.webp`
- `/public/maps/zones/*.webp`
- `/public/characters/*.webp`
- `/public/og/ezzi-og.png`

