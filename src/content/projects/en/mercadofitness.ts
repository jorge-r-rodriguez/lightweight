import type { ProjectContent } from "../../types";

export default {
  title: "Mercado Fitness",
  theme: "dark",
  tags: ["wordpress", "seo", "analytics"],
  videoBorder: false,
  live: "https://mercadofitness.com/",
  description:
    "Portal de noticias y comunidad de referencia para la industria del fitness en Hispanoamerica.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/mercadofitness.jpg",
        alt: "Mercado Fitness",
        caption: "Mercado Fitness",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Desarrollo del CMS, arquitectura de contenidos y optimizacion SEO para un medio especializado con audiencia regional en multiples paises de habla hispana.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["WordPress", "Portal de noticias", "SEO", "Arquitectura de contenidos"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
