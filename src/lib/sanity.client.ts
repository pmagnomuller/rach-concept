import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // In development, always hit the API directly so new
  // content (like newly published belts) shows up instantly.
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});

