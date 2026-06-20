import type { ProjectContent } from "../../types";

export default {
  title: "Todo Noticias (TN)",
  theme: "dark",
  tags: ["javascript", "drupal", "analytics"],
  videoBorder: false,
  live: "https://tn.com.ar/",
  description:
    "Optimización de performance y frontend del medio de noticias online mas consumido de Argentina, con más de 30 millones de lectores mensuales.",
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
        text: "Trabajo sobre integración de CMS Drupal y reproductor de video para sostener disponibilidad, consumo multimedia y estabilidad en picos de tráfico de alto impacto informativo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Áreas trabajadas",
        items: ["Frontend de alto tráfico", "Integración Drupal", "Video player", "Performance y disponibilidad"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
