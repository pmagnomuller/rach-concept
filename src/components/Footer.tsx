"use client";

import { useLanguage } from "@/lib/i18n";
import Link from "next/link";

export default function Footer() {
  const { ui } = useLanguage();

  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-xl font-medium tracking-wide text-foreground">
              RachConcept
            </div>
            <p className="mt-3 text-sm text-muted">{ui.footerTagline}</p>
            <p className="mt-2 text-sm text-muted">{ui.footerBusinessInfo}</p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground">
              {ui.footerContact}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                {ui.footerEmail}:{" "}
                <a
                  href="mailto:rachconcept.store@gmail.com"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  rachconcept.store@gmail.com
                </a>
              </li>
              <li>
                {ui.footerInstagram}:{" "}
                <a
                  href="https://instagram.com/rachconcept.store"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  @rachconcept
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-foreground">
              {ui.footerLegal}
            </h3>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link
                href="/privacy"
                className="text-muted hover:text-foreground transition-colors"
              >
                {ui.navPrivacy}
              </Link>
              <Link
                href="/terms"
                className="text-muted hover:text-foreground transition-colors"
              >
                {ui.navTerms}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} RachConcept. {ui.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}

