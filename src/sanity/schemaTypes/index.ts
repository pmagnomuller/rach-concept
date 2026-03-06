import { type SchemaTypeDefinition } from "sanity";
import { heroType } from "./hero";
import { beltType } from "./belt";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, beltType] as SchemaTypeDefinition[],
};

