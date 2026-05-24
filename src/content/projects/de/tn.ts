import type { ProjectContent } from "../../types";

export default {
  title: "Todo Noticias (TN)",
  theme: "dark",
  tags: ["javascript", "drupal", "analytics"],
  videoBorder: false,
  live: "https://tn.com.ar/",
  description:
    "Optimizacion de performance y frontend del medio de noticias online mas consumido de Argentina, con mas de 30 millones de lectores mensuales.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/tn.jpg",
        alt: "Todo Noticias",
        caption: "Todo Noticias",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Trabajo sobre integracion de CMS Drupal y reproductor de video para sostener disponibilidad, consumo multimedia y estabilidad en picos de trafico de alto impacto informativo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Areas trabajadas",
        items: ["Frontend de alto trafico", "Integracion Drupal", "Video player", "Performance y disponibilidad"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
