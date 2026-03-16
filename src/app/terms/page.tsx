"use client";

import { useLanguage } from "@/lib/i18n";

const CONTENT = {
  pt: {
    title: "Termos de Utilização",
    updated: "Última atualização: 16 de março de 2026",
    intro:
      "Ao aceder a este website, concorda com estes termos. O site apresenta apenas informação de catálogo sobre produtos RachConcept.",
    sections: [
      {
        heading: "1. Finalidade do site",
        body: "Este website não é uma loja online. A informação apresentada tem caráter informativo e pode ser alterada sem aviso prévio.",
      },
      {
        heading: "2. Propriedade intelectual",
        body: "Conteúdos, fotografias, textos e identidade visual pertencem à RachConcept ou são usados com autorização. Não é permitida reprodução sem consentimento.",
      },
      {
        heading: "3. Informação de produtos",
        body: "Procuramos manter descrições e imagens atualizadas, mas podem existir diferenças de cor, disponibilidade ou detalhes de acabamento.",
      },
      {
        heading: "4. Ligações a terceiros",
        body: "O site pode incluir links externos (por exemplo, Instagram). Não controlamos nem assumimos responsabilidade por conteúdos e políticas de terceiros.",
      },
      {
        heading: "5. Limitação de responsabilidade",
        body: "Na máxima extensão permitida por lei, a RachConcept não se responsabiliza por danos indiretos resultantes da utilização deste website.",
      },
      {
        heading: "6. Contacto",
        body: "Para questões sobre estes termos: rachconcept.store@gmail.com.",
      },
    ],
  },
  en: {
    title: "Terms of Use",
    updated: "Last updated: March 16, 2026",
    intro:
      "By using this website, you agree to these terms. The site provides catalogue information about RachConcept products only.",
    sections: [
      {
        heading: "1. Website purpose",
        body: "This website is not an online store. All content is for informational purposes and may change without notice.",
      },
      {
        heading: "2. Intellectual property",
        body: "Content, photos, copy, and visual identity belong to RachConcept or are used with permission. Reproduction is not allowed without consent.",
      },
      {
        heading: "3. Product information",
        body: "We aim to keep descriptions and images updated, but variations in color, availability, or finishing details may occur.",
      },
      {
        heading: "4. Third-party links",
        body: "The website may include external links (for example, Instagram). We do not control or assume responsibility for third-party content or policies.",
      },
      {
        heading: "5. Limitation of liability",
        body: "To the fullest extent permitted by law, RachConcept is not liable for indirect damages resulting from use of this website.",
      },
      {
        heading: "6. Contact",
        body: "For questions about these terms: rachconcept.store@gmail.com.",
      },
    ],
  },
} as const;

export default function TermsPage() {
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
