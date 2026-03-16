"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { ui } = useLanguage();

  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-serif text-xl font-medium tracking-wide text-foreground">
            RachConcept
          </div>

          {/* Tagline */}
          <p className="font-serif text-muted italic">
            {ui.footerTagline}
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} RachConcept. {ui.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}

