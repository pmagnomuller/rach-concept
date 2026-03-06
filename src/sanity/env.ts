export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "2026-03-05";

const rawDataset =
  process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;

const rawProjectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const dataset = assertValue(
  rawDataset,
  "Missing environment variable: SANITY_STUDIO_DATASET or NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  rawProjectId,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }

  return v;
}

