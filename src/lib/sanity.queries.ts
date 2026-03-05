import { groq } from "next-sanity";
import { sanityClient } from "./sanity.client";
import type { HeroContent, BeltContent } from "@/types/cms";
import {
  belts as fallbackBelts,
  getAllBeltIds as getFallbackBeltIds,
  getBeltById as getFallbackBeltById,
} from "@/data/belts";

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
  image
}`;

const BELT_BY_SLUG_QUERY = groq`*[_type == "belt" && slug.current == $slug][0]{
  "id": slug.current,
  "name": title,
  description,
  material,
  details,
  gradient,
  accentColor,
  image
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
    const hero = await sanityClient.fetch<HeroContent | null>(HERO_QUERY, {}, { next: { revalidate: 60 } });
    return hero ?? defaultHero;
  } catch {
    return defaultHero;
  }
}

export async function getBelts(): Promise<BeltContent[]> {
  try {
    const belts = await sanityClient.fetch<BeltContent[] | null>(BELTS_QUERY, {}, { next: { revalidate: 300 } });
    return belts && belts.length > 0 ? belts : fallbackBelts;
  } catch {
    return fallbackBelts;
  }
}

export async function getBeltBySlug(slug: string): Promise<BeltContent | null> {
  try {
    const belt = await sanityClient.fetch<BeltContent | null>(
      BELT_BY_SLUG_QUERY,
      { slug },
      { next: { revalidate: 300 } }
    );
    if (belt) return belt;
    return getFallbackBeltById(slug) ?? null;
  } catch {
    return getFallbackBeltById(slug) ?? null;
  }
}

export async function getAllBeltSlugs(): Promise<string[]> {
  try {
    const slugs = await sanityClient.fetch<string[] | null>(
      BELT_SLUGS_QUERY,
      {},
      { next: { revalidate: 300 } }
    );
    if (slugs && slugs.length > 0) return slugs;
    return getFallbackBeltIds();
  } catch {
    return getFallbackBeltIds();
  }
}

