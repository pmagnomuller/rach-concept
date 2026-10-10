"use client";

import { useLanguage } from "@/lib/i18n";

const CONTENT = {
  pt: {
    title: "Aviso Legal",
    updated: "Última atualização: 10 de outubro de 2026",
    intro:
      "Este aviso identifica o responsável pelo website rachconcept.com e esclarece a natureza informativa do catálogo RachConcept.",
    sections: [
      {
        heading: "1. Identificação",
        body: "O website é explorado sob a marca RachConcept, com contacto em rachconcept.store@gmail.com e presença em Instagram @rachconcept.store. A atividade está sediada em Portugal.",
      },
      {
        heading: "2. Natureza do website",
        body: "Este website é um catálogo informativo de produtos. Não constitui uma loja online: não processa encomendas, pagamentos nem recolhe dados de cartão ou faturação através do site.",
      },
      {
        heading: "3. Contacto comercial",
        body: "Pedidos de informação sobre produtos podem ser feitos por email ou Instagram. Qualquer eventual venda ocorre fora deste website e fica sujeita às condições acordadas nesse contexto.",
      },
      {
        heading: "4. Propriedade intelectual",
        body: "Textos, fotografias, logótipo e restante identidade visual pertencem à RachConcept ou são utilizados com autorização. É proibida a reprodução sem consentimento prévio.",
      },
      {
        heading: "5. Responsabilidade pelo conteúdo",
        body: "Procuramos manter a informação do catálogo correta e atualizada. Ainda assim, imagens, cores, disponibilidade e detalhes de acabamento podem variar. O uso do website faz-se por conta e risco do visitante, na medida permitida pela lei aplicável.",
      },
      {
        heading: "6. Ligações a terceiros e alojamento",
        body: "O site pode incluir ligações a serviços externos (por exemplo, Instagram). O alojamento é prestado por Vercel. Não controlamos as políticas desses terceiros.",
      },
      {
        heading: "7. Legislação aplicável",
        body: "Salvo disposição legal em contrário, este aviso e a utilização do website regem-se pela lei portuguesa. Para questões relacionadas com este aviso: rachconcept.store@gmail.com.",
      },
    ],
  },
  en: {
    title: "Legal Notice",
    updated: "Last updated: October 10, 2026",
    intro:
      "This notice identifies the operator of rachconcept.com and clarifies that RachConcept is an informational product catalogue.",
    sections: [
      {
        heading: "1. Identification",
        body: "This website is operated under the RachConcept brand, contactable at rachconcept.store@gmail.com and on Instagram @rachconcept.store. The activity is based in Portugal.",
      },
      {
        heading: "2. Nature of the website",
        body: "This website is an informational product catalogue. It is not an online store: it does not process orders or payments, and it does not collect card or billing data through the site.",
      },
      {
        heading: "3. Commercial contact",
        body: "Product enquiries can be made by email or Instagram. Any sale takes place outside this website and is subject to the terms agreed in that context.",
      },
      {
        heading: "4. Intellectual property",
        body: "Copy, photographs, logo, and other brand assets belong to RachConcept or are used with permission. Reproduction without prior consent is not allowed.",
      },
      {
        heading: "5. Content responsibility",
        body: "We aim to keep catalogue information accurate and up to date. Images, colours, availability, and finishing details may still vary. Use of the website is at the visitor's own risk to the extent permitted by applicable law.",
      },
      {
        heading: "6. Third-party links and hosting",
        body: "The site may include links to external services (for example, Instagram). Hosting is provided by Vercel. We do not control those third parties' policies.",
      },
      {
        heading: "7. Applicable law",
        body: "Unless mandatory law provides otherwise, this notice and use of the website are governed by Portuguese law. For questions about this notice: rachconcept.store@gmail.com.",
      },
    ],
  },
} as const;

export default function LegalNoticePage() {
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
