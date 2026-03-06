import dotenv from "dotenv";
import { createClient } from "@sanity/client";
import { belts } from "../src/data/belts";

// Load env vars from .env.local (Next.js style) and .env as fallback
dotenv.config({ path: ".env.local" });
dotenv.config();

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing env vars. Please set SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET and SANITY_WRITE_TOKEN (or matching NEXT_PUBLIC_* vars).",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion:
    process.env.SANITY_STUDIO_API_VERSION ||
    process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
    "2025-01-01",
  token,
  useCdn: false,
});

async function run() {
  const mutations = belts.map((belt, index) => ({
    createOrReplace: {
      _id: `belt.${belt.id}`,
      _type: "belt",
      title: belt.name,
      slug: { _type: "slug", current: belt.id },
      description: belt.description,
      material: belt.material,
      details: belt.details,
      gradient: belt.gradient,
      accentColor: belt.accentColor,
      imagePath: belt.image,
      sortOrder: index + 1,
    },
  }));

  const result = await client.transaction(mutations).commit();
  console.log(`Seeded ${result.results.length} belts into Sanity.`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

