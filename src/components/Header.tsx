"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, ui } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="RachConcept"
              width={140}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
            >
              {ui.navHome}
            </Link>
            <Link 
              href="/catalogue" 
              className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
            >
              {ui.navCatalogue}
            </Link>
            <div className="ml-2 inline-flex items-center rounded-full border border-border bg-background/70 p-1 text-xs font-medium tracking-wider uppercase">
              <button
                type="button"
                onClick={() => setLanguage("pt")}
                className={`rounded-full px-3 py-1 transition-colors ${
                  language === "pt" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                }`}
                aria-label="Mudar para português"
              >
                PT
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 transition-colors ${
                  language === "en" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={ui.toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
              >
                {ui.navHome}
              </Link>
              <Link 
                href="/catalogue"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
              >
                {ui.navCatalogue}
              </Link>
              <div className="inline-flex items-center self-start rounded-full border border-border bg-background/70 p-1 text-xs font-medium tracking-wider uppercase">
                <button
                  type="button"
                  onClick={() => setLanguage("pt")}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    language === "pt" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                  aria-label="Mudar para português"
                >
                  PT
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    language === "en" ? "bg-foreground text-background" : "text-muted hover:text-foreground"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
