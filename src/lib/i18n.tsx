"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

const STORAGE_KEY = "rachconcept-language";

type UiDictionary = {
  navHome: string;
  navCatalogue: string;
  navPrivacy: string;
  navTerms: string;
  toggleMenu: string;
  heroEyebrow: string;
  heroTagline: string;
  heroDescription: string;
  heroCta: string;
  heroNote: string;
  heroImageAlt: string;
  homeCollectionEyebrow: string;
  homeCollectionTitle: string;
  homeCollectionCta: string;
  homePhilosophyEyebrow: string;
  homePhilosophyTitle: string;
  homePhilosophyText: string;
  catalogueMetaTitle: string;
  catalogueMetaDescription: string;
  catalogueEyebrow: string;
  catalogueTitle: string;
  catalogueDescription: string;
  beltNotFoundTitle: string;
  beltDetailsTitle: string;
  beltMoreDetailsTitle: string;
  beltMoreDetailsText: string;
  beltBackToCollection: string;
  quickView: string;
  footerTagline: string;
  footerRights: string;
  footerLegal: string;
  footerContact: string;
  footerBusinessInfo: string;
  footerEmail: string;
  footerInstagram: string;
  cookieTitle: string;
  cookieDescription: string;
  cookieAccept: string;
  cookieDecline: string;
};

export const UI_TEXT: Record<Language, UiDictionary> = {
  pt: {
    navHome: "Início",
    navCatalogue: "Catálogo",
    navPrivacy: "Privacidade",
    navTerms: "Termos",
    toggleMenu: "Alternar menu",
    heroEyebrow: "Looks do dia a dia, elevados",
    heroTagline: "É só adicionar um cinto.",
    heroDescription:
      "Fivelas esculturais, couros sofisticados e peças pensadas para estar no centro do seu guarda-roupa — não apenas na cintura.",
    heroCta: "Ver coleção",
    heroNote: "Cintos finalizados à mão, feitos em Portugal.",
    heroImageAlt: "Close de um cinto RachConcept combinado com uma blusa de seda",
    homeCollectionEyebrow: "A Coleção",
    homeCollectionTitle: "Excelência Artesanal",
    homeCollectionCta: "Ver Coleção Completa",
    homePhilosophyEyebrow: "A Nossa Filosofia",
    homePhilosophyTitle: "Cada conjunto merece o toque final perfeito",
    homePhilosophyText:
      "Na RachConcept, acreditamos que os acessórios não são apenas complementos — são transformações. Cada cinto da nossa coleção é pensado com cuidado para elevar o seu estilo, acrescentando aquele elemento essencial de sofisticação e personalidade.",
    catalogueMetaTitle: "Catálogo | RachConcept",
    catalogueMetaDescription:
      "Explore a nossa coleção completa de cintos artesanais. Cada peça conta uma história única de elegância e cuidado.",
    catalogueEyebrow: "Descubra",
    catalogueTitle: "O Catálogo",
    catalogueDescription:
      "Cada cinto da nossa coleção é produzido com atenção minuciosa aos detalhes, pensado para ser o complemento ideal do seu estilo pessoal.",
    beltNotFoundTitle: "Cinto não encontrado | RachConcept",
    beltDetailsTitle: "Detalhes",
    beltMoreDetailsTitle: "Mais detalhes",
    beltMoreDetailsText:
      "Para mais informações sobre o produto, inspiração de estilo e os lançamentos mais recentes, visite o nosso",
    beltBackToCollection: "Voltar para a coleção",
    quickView: "Ver detalhes",
    footerTagline: "É só adicionar um cinto!",
    footerRights: "Todos os direitos reservados.",
    footerLegal: "Legal",
    footerContact: "Contacto",
    footerBusinessInfo: "RachConcept - Catálogo online de cintos artesanais.",
    footerEmail: "Email",
    footerInstagram: "Instagram",
    cookieTitle: "Preferências de cookies",
    cookieDescription:
      "Utilizamos cookies essenciais para o funcionamento do site e, com a sua autorização, cookies analíticos para perceber como o catálogo é utilizado.",
    cookieAccept: "Aceitar analíticos",
    cookieDecline: "Apenas essenciais",
  },
  en: {
    navHome: "Home",
    navCatalogue: "Catalogue",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    toggleMenu: "Toggle menu",
    heroEyebrow: "Everyday looks, elevated",
    heroTagline: "Just add a belt.",
    heroDescription:
      "Sculptural buckles, rich leathers, and pieces designed to sit at the heart of your wardrobe - not just at your waist.",
    heroCta: "View collection",
    heroNote: "Hand-finished belts, made in Portugal.",
    heroImageAlt: "Close-up of a RachConcept belt styled with a silk top",
    homeCollectionEyebrow: "The Collection",
    homeCollectionTitle: "Handcrafted Excellence",
    homeCollectionCta: "View Full Collection",
    homePhilosophyEyebrow: "Our Philosophy",
    homePhilosophyTitle: "Every outfit deserves that perfect finishing touch",
    homePhilosophyText:
      "At RachConcept, we believe accessories are not merely additions - they are transformations. Each belt in our collection is thoughtfully designed to elevate your style, adding that essential element of sophistication and personality.",
    catalogueMetaTitle: "Catalogue | RachConcept",
    catalogueMetaDescription:
      "Explore our complete collection of handcrafted belts. Each piece tells a unique story of elegance and craftsmanship.",
    catalogueEyebrow: "Explore",
    catalogueTitle: "The Catalogue",
    catalogueDescription:
      "Each belt in our collection is crafted with meticulous attention to detail, designed to be the perfect complement to your personal style.",
    beltNotFoundTitle: "Belt Not Found | RachConcept",
    beltDetailsTitle: "Details",
    beltMoreDetailsTitle: "More details",
    beltMoreDetailsText:
      "For additional product information, styling inspiration, and the latest releases, visit our",
    beltBackToCollection: "Back to Collection",
    quickView: "View details",
    footerTagline: "Just add a belt!",
    footerRights: "All rights reserved.",
    footerLegal: "Legal",
    footerContact: "Contact",
    footerBusinessInfo: "RachConcept - Online catalogue of handcrafted belts.",
    footerEmail: "Email",
    footerInstagram: "Instagram",
    cookieTitle: "Cookie preferences",
    cookieDescription:
      "We use essential cookies so the site can run and, with your permission, analytics cookies to understand how visitors use the catalogue.",
    cookieAccept: "Accept analytics",
    cookieDecline: "Essential only",
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  ui: UiDictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "pt";
    }
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") {
      return saved;
    }
    return "pt";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      ui: UI_TEXT[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
