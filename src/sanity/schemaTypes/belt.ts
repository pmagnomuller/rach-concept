import { defineField, defineType } from "sanity";

export const beltType = defineType({
  name: "belt",
  title: "Belt",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "gradient",
      title: "Gradient CSS",
      type: "string",
      description:
        "CSS linear-gradient used for the card and product background.",
    }),
    defineField({
      name: "accentColor",
      title: "Accent color",
      type: "string",
      description: "Hex color used for belt accent UI elements.",
    }),
    defineField({
      name: "imagePath",
      title: "Fallback image path",
      type: "string",
      description:
        "Optional path to an image in /public (used as a fallback until a Studio image is uploaded).",
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Accessible description of the product image.",
        }),
      ],
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear earlier in lists.",
    }),
  ],
});

