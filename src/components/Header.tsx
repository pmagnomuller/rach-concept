"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              Home
            </Link>
            <Link 
              href="/catalogue" 
              className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
            >
              Catalogue
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
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
                Home
              </Link>
              <Link 
                href="/catalogue"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-muted hover:text-foreground transition-colors"
              >
                Catalogue
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
