import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";
import type { HeroContent, BeltContent } from "@/types/cms";

const HERO_QUERY = groq`*[_type == "hero"][0]{
  badge,
  headline,
  body,
  ctaLabel,
  "ctaHref": coalesce(ctaHref, "/catalogue"),
  supportingText
}`;

const BELTS_QUERY = groq`*[_type == "belt"] | order(coalesce(sortOrder, 9999) asc, _createdAt asc)[]{
  "id": slug.current,
  "name": title,
  description,
  material,
  details,
  gradient,
  accentColor,
  // Prefer Sanity image asset URL, fall back to existing imagePath string
  "image": coalesce(image.asset->url, imagePath)
}`;

const BELT_BY_SLUG_QUERY = groq`*[_type == "belt" && slug.current == $slug][0]{
  "id": slug.current,
  "name": title,
  description,
  material,
  details,
  gradient,
  accentColor,
  "image": coalesce(image.asset->url, imagePath)
}`;

const BELT_SLUGS_QUERY = groq`*[_type == "belt"].slug.current`;

const defaultHero: HeroContent = {
  badge: "Everyday looks, elevated",
  headline: "Just add a belt",
  body: "Sculptural buckles, rich leathers, and pieces designed to sit at the heart of your wardrobe—not just at your waist.",
  ctaLabel: "View collection",
  ctaHref: "/catalogue",
  supportingText: "Hand-finished belts, made in Portugal.",
};

export async function getHero(): Promise<HeroContent> {
  try {
    const hero = await sanityClient.fetch<HeroContent | null>(
      HERO_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[getHero] Sanity result:", hero);
    }
    return hero ?? defaultHero;
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[getHero] Error fetching from Sanity:", err);
    }
    return defaultHero;
  }
}

export async function getBelts(): Promise<BeltContent[]> {
  try {
    const cmsBelts = await sanityClient.fetch<BeltContent[] | null>(
      BELTS_QUERY,
      {},
      { next: { revalidate: 300 } },
    );

    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(
        "[getBelts] Sanity result count:",
        Array.isArray(cmsBelts) ? cmsBelts.length : cmsBelts,
      );
    }

    // Only use belts from Sanity; if none, return an empty list.
    return cmsBelts ?? [];
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[getBelts] Error fetching from Sanity:", err);
    }
    return [];
  }
}

export async function getBeltBySlug(slug: string): Promise<BeltContent | null> {
  try {
    const belt = await sanityClient.fetch<BeltContent | null>(
      BELT_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 300 } }
    );
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log("[getBeltBySlug] slug:", slug, "found:", !!belt);
    }
    return belt ?? null;
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[getBeltBySlug] Error fetching from Sanity:", err);
    }
    return null;
  }
}

export async function getAllBeltSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityClient.fetch<string[] | null>(
      BELT_SLUGS_QUERY,
      {},
      { next: { revalidate: 300 } }
    );
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(
        "[getAllBeltSlugs] Sanity result count:",
        Array.isArray(slugs) ? slugs.length : slugs,
      );
    }
    return slugs ?? [];
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[getAllBeltSlugs] Error fetching from Sanity:", err);
    }
    return [];
  }
}

