import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Small uppercase label above the hero content.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Main hero headline (e.g. 'Just add a belt.').",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body copy",
      type: "text",
      rows: 3,
      description:
        "Short paragraph describing the brand and what makes the collection special.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary CTA label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaHref",
      title: "Primary CTA URL",
      type: "string",
      initialValue: "/catalogue",
    }),
    defineField({
      name: "supportingText",
      title: "Supporting text",
      type: "string",
      description:
        "Small line of text that sits next to the primary CTA (e.g. 'Hand-finished belts, made in Portugal.').",
    }),
  ],
});

