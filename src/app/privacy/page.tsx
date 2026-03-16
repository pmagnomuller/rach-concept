"use client";

import { useLanguage } from "@/lib/i18n";

const CONTENT = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: 16 de março de 2026",
    intro:
      "A RachConcept respeita a sua privacidade. Este site é um catálogo informativo de produtos e não processa pagamentos online.",
    sections: [
      {
        heading: "1. Dados que podemos recolher",
        body: "Podemos recolher dados fornecidos voluntariamente (por exemplo, quando entra em contacto por email/Instagram) e dados técnicos essenciais de navegação, como endereço IP e informações de dispositivo.",
      },
      {
        heading: "2. Finalidade do tratamento",
        body: "Utilizamos os dados apenas para responder a pedidos de contacto, gerir o catálogo e melhorar o site. Não vendemos os seus dados pessoais a terceiros.",
      },
      {
        heading: "3. Cookies",
        body: "Usamos cookies essenciais para o funcionamento do website. Cookies analíticos só são usados com o seu consentimento explícito.",
      },
      {
        heading: "4. Conservação dos dados",
        body: "Mantemos os dados pessoais apenas pelo período necessário para cumprir as finalidades descritas nesta política ou para cumprir obrigações legais.",
      },
      {
        heading: "5. Os seus direitos",
        body: "Pode pedir acesso, retificação ou eliminação dos seus dados, bem como limitar o tratamento, através do email de contacto abaixo.",
      },
      {
        heading: "6. Contacto",
        body: "Para questões de privacidade, contacte: rachconcept.store@gmail.com.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: March 16, 2026",
    intro:
      "RachConcept respects your privacy. This website is a product catalogue and does not process online payments.",
    sections: [
      {
        heading: "1. Data we may collect",
        body: "We may collect data you provide voluntarily (for example, when contacting us by email/Instagram) and essential technical browsing data such as IP address and device information.",
      },
      {
        heading: "2. Why we process data",
        body: "We use data only to answer contact requests, manage the catalogue, and improve the website. We do not sell personal data to third parties.",
      },
      {
        heading: "3. Cookies",
        body: "We use essential cookies for site operation. Analytics cookies are only used with your explicit consent.",
      },
      {
        heading: "4. Data retention",
        body: "We keep personal data only for as long as necessary to fulfill the purposes described in this policy or to comply with legal obligations.",
      },
      {
        heading: "5. Your rights",
        body: "You can request access, correction, or deletion of your data, and request restrictions on processing, via the contact email below.",
      },
      {
        heading: "6. Contact",
        body: "For privacy questions, contact: rachconcept.store@gmail.com.",
      },
    ],
  },
} as const;

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const content = CONTENT[language];

  return (
    <section className="px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 font-serif text-4xl font-light text-foreground">{content.title}</h1>
        <p className="mb-8 text-sm text-muted">{content.updated}</p>
        <p className="mb-10 leading-relaxed text-foreground">{content.intro}</p>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="mb-2 font-serif text-2xl font-light text-foreground">
                {section.heading}
              </h2>
              <p className="leading-relaxed text-muted">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
