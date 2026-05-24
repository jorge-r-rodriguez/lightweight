import type { ProjectContent } from "../../types";

export default {
  title: "El Trece TV",
  theme: "dark",
  tags: ["javascript", "drupal", "uxui"],
  videoBorder: false,
  live: "https://www.eltrecetv.com.ar/",
  description:
    "Desarrollo frontend de la plataforma digital del canal lider de television abierta de Argentina, con foco en streaming en vivo y experiencia multiplataforma.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/eltrece.jpg",
        alt: "El Trece TV",
        caption: "El Trece TV",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Integracion de streaming en vivo, gestion de contenido multimedia y optimizacion de la experiencia para millones de usuarios en distintos dispositivos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["JavaScript", "Drupal", "Streaming en vivo", "Experiencia multimedia"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
