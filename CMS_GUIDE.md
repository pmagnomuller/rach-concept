# RachConcept CMS guide (Sanity.io)

This project uses **Sanity.io** as a headless CMS to manage homepage content and the belt catalogue, while keeping the Next.js app fast and mostly static.

This guide explains how non‑technical editors and developers can work with the CMS.

---

## 1. Prerequisites

Before using the CMS in this project, make sure:

- **Sanity project is set up** (via `npm create sanity@latest` or the Sanity web UI).
- The following environment variables are configured in your app (for local dev use `.env.local`):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

- Dependencies have been installed:

```bash
npm install
```

---

## 2. Opening the Sanity Studio

From the project root:

```bash
npx sanity dev
```

This starts the **Sanity Studio** using `sanity.config.ts`. The CLI will show the local URL (typically `http://localhost:3333`).

To deploy a hosted Studio for editors:

```bash
npx sanity deploy
```

Follow the prompts; after deployment, editors can log in to the hosted Studio with their Sanity accounts.

---

## 3. Editing the homepage hero

Schema: `sanity/schemas/hero.ts`  
Used in the app by: `getHero()` in `src/lib/sanity.queries.ts` and passed into the `Hero` component on the homepage.

### 3.1 Where to find it

- In the Studio, open the **“Hero”** document type.
- There should normally be **one** hero document; the site uses the first document returned. Keep just one published hero entry to avoid confusion.

### 3.2 Fields and how they map

- **Badge** (`badge`):  
  Small uppercase label above the hero copy (e.g. “Everyday looks, elevated”).

- **Headline** (`headline`):  
  Main hero phrase (e.g. “Just add a belt”). The UI adds the trailing period styling.

- **Body copy** (`body`):  
  Short paragraph under the headline describing the brand / collection.

- **Primary CTA label** (`ctaLabel`):  
  Text on the main button (e.g. “View collection”).

- **Primary CTA URL** (`ctaHref`):  
  Link the button goes to. Defaults to `/catalogue`.

- **Supporting text** (`supportingText`):  
  Small line of text shown next to the CTA (e.g. “Hand-finished belts, made in Portugal.”).

### 3.3 When changes go live

- In **development** (`npm run dev`), hero changes are visible almost immediately after saving in Studio.
- In **production**, the hero is cached with a revalidation window of about **60 seconds**, so updates can take up to a minute to show.

If the hero document is missing or there is a CMS outage, the site falls back to the original hardcoded hero copy.

---

## 4. Managing the belt catalogue

Schema: `sanity/schemas/belt.ts`  
Used by: `getBelts()`, `getBeltBySlug()`, `getAllBeltSlugs()` in `src/lib/sanity.queries.ts`, and the pages under:

- `src/app/catalogue/page.tsx`
- `src/app/belt/[id]/page.tsx`

### 4.1 Belt document fields

For each belt:

- **Name** (`title`):  
  Display name of the belt (used on listing cards and product page title).

- **Slug** (`slug`):  
  URL segment for the product, generated from the name.  
  - Example: `Heritage Trio` → slug `heritage-trio` → URL `/belt/heritage-trio`.
  - Must be **unique**.

- **Description** (`description`):  
  Main descriptive paragraph on the product page and in SEO metadata.

- **Material** (`material`):  
  Shown as the small label above the product name (e.g. “Full-Grain Leather”).

- **Details** (`details` – array of strings):  
  Bullet points in the “Details” list on the product page.

- **Gradient CSS** (`gradient`):  
  CSS `linear-gradient(...)` string that defines the colored background seen behind each belt image.

- **Accent color** (`accentColor`):  
  Hex color (e.g. `#D9B26A`) used for accent elements around that belt.

- **Image path or URL** (`image`):  
  Either:
  - A path to an image in your Next.js `public/` folder (e.g. `/produto1.jpeg`), or
  - A full external image URL.

- **Sort order** (`sortOrder`):  
  Optional number that controls ordering in lists. Lower numbers appear earlier. If unset, belts are ordered by creation time.

### 4.2 Adding a new belt

1. Open the **Belt** document type in Studio.
2. Click **“New belt”** (or equivalent).
3. Fill out all required fields:
   - **Name** and **Slug** (check the generated slug).
   - **Description**, **Material**, **Details**.
   - **Gradient CSS**, **Accent color**, **Image path/URL**.
   - Optional **Sort order** if you want a specific position in grids.
4. **Publish** the document.

Once published:

- The belt will appear in:
  - The catalogue grid at `/catalogue`.
  - Its own product page at `/belt/<slug>`.
- In production, changes are cached with a **5‑minute** revalidation window.

### 4.3 Editing or hiding an existing belt

- To **edit**, open the belt document, change fields, and **publish** again.
- To **hide** a belt:
  - Either **unpublish** it (it will disappear from lists and its page will 404), or
  - Temporarily set its slug to something unused if you need to keep it published but inaccessible.

If CMS data for a belt is missing or there is a CMS outage, the app will fall back to the static data in `src/data/belts.ts` for IDs that still exist there.

---

## 5. How the CMS integrates with the app

High‑level flow:

- The app uses server‑side helper functions in `src/lib/sanity.queries.ts`:
  - `getHero()` for hero content.
  - `getBelts()` for catalogue and homepage preview.
  - `getBeltBySlug()` and `getAllBeltSlugs()` for individual belt pages and static path generation.
- Each helper:
  - Talks to Sanity using `sanityClient` from `src/lib/sanity.client.ts`.
  - Applies sensible **Next.js caching / revalidation**.
  - Provides **fallbacks** to hardcoded data when the CMS is empty or unreachable.

For editors, the key takeaway is:

- **You don’t need to touch the code** to change homepage copy or belt information.  
- All edits happen in the Sanity Studio; the Next.js site picks them up automatically after a short cache window.

---

## 6. Troubleshooting

**Hero not updating**

- Check that:
  - The hero document is **published**.
  - You have only **one** published hero.
  - Wait up to 1–2 minutes in production due to caching.

**New belt not showing up**

- Confirm:
  - The belt document is **published**.
  - The slug is unique and matches the expected URL.
  - The sort order still makes sense (if set).
  - Wait up to 5 minutes in production, or run in dev mode for instant feedback.

**Site still showing old hardcoded content**

- Ensure that:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set correctly.
  - The Sanity project and dataset actually contain the expected documents.
  - The app has been rebuilt/restarted after changing env vars.

If all else fails, you can temporarily rely on the static content (hero + `src/data/belts.ts`) while you debug the Sanity configuration.

