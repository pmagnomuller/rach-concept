import type { Belt } from "@/data/belts";

export interface HeroContent {
  badge: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  supportingText?: string;
}

export type BeltContent = Belt;

