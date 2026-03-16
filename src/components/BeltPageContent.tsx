"use client";

import { Belt, getLocalizedBeltContent } from "@/data/belts";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

interface BeltPageContentProps {
  belt: Belt;
}

export default function BeltPageContent({ belt }: BeltPageContentProps) {
  const { language, ui } = useLanguage();
  const localizedBelt = getLocalizedBeltContent(belt, language);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-muted hover:text-foreground transition-colors">
                {ui.navHome}
              </Link>
            </li>
            <li className="text-muted">/</li>
            <li>
              <Link href="/catalogue" className="text-muted hover:text-foreground transition-colors">
                {ui.navCatalogue}
              </Link>
            </li>
            <li className="text-muted">/</li>
            <li className="text-foreground">{localizedBelt.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="relative">
            <div
              className="aspect-[4/5] w-full rounded-sm overflow-hidden bg-foreground/[0.02]"
              style={{ background: belt.gradient }}
            >
              <Image
                src={belt.image}
                alt={localizedBelt.name}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/90 to-transparent" />
              <div className="pointer-events-none absolute inset-6 border border-white/40 rounded-sm mix-blend-soft-light" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
              {localizedBelt.material}
            </p>

            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              {localizedBelt.name}
            </h1>

            <div className="w-16 h-px bg-accent mb-8" />

            <p className="text-muted leading-relaxed mb-10">{localizedBelt.description}</p>

            <div className="mb-10">
              <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-4">
                {ui.beltDetailsTitle}
              </h3>
              <ul className="space-y-2">
                {localizedBelt.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-sm tracking-[0.2em] uppercase text-foreground mb-3">
                {ui.beltMoreDetailsTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {ui.beltMoreDetailsText}{" "}
                <a
                  href="https://www.instagram.com/rachconcept.store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-accent hover:text-accent"
                >
                  Instagram
                </a>
                .
              </p>
            </div>

            <Link
              href="/catalogue"
              className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors group"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              {ui.beltBackToCollection}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
