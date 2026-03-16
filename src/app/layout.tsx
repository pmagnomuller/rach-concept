import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { LanguageProvider } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RachConcept | Just Add a Belt",
  description:
    "Discover the exclusive belt collection by RachConcept. Elegância artesanal para cada ocasião.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
      >
        <LanguageProvider>
          <Analytics />
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsentBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
