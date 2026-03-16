"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { COOKIE_CONSENT_KEY, isCookieConsentStatus } from "@/lib/cookieConsent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function Analytics() {
  const [canTrack, setCanTrack] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      const saved = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setCanTrack(isCookieConsentStatus(saved) && saved === "accepted");
    };

    updateConsent();
    window.addEventListener("cookie-consent-updated", updateConsent);

    return () => {
      window.removeEventListener("cookie-consent-updated", updateConsent);
    };
  }, []);

  if (!GA_MEASUREMENT_ID || !canTrack) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
