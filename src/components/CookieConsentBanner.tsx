"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  COOKIE_CONSENT_KEY,
  CookieConsentStatus,
  isCookieConsentStatus,
} from "@/lib/cookieConsent";

export default function CookieConsentBanner() {
  const { ui } = useLanguage();
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return !isCookieConsentStatus(saved);
  });

  const setConsent = (status: CookieConsentStatus) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, status);
    setIsVisible(false);
    // Notifica outros componentes (ex.: analytics) da decisão do utilizador.
    window.dispatchEvent(new Event("cookie-consent-updated"));
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-foreground">{ui.cookieTitle}</p>
          <p className="text-sm text-muted">{ui.cookieDescription}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setConsent("declined")}
            className="px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-muted ring-1 ring-border transition-colors hover:text-foreground"
          >
            {ui.cookieDecline}
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-background transition-colors hover:bg-accent-dark"
          >
            {ui.cookieAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
