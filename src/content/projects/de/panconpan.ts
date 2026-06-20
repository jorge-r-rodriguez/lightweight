import type { ProjectContent } from "../../types";

export default {
  title: "Pan con Pan",
  theme: "dark",
  tags: ["uxui", "responsive", "html"],
  videoBorder: false,
  live: "https://www.panconpan.com.ar/",
  description:
    "Diseño UX/UI y desarrollo frontend para plataforma de equipamiento gastronómico, con arquitectura visual orientada a conversión.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/panconpan.jpg",
        alt: "Pan con Pan",
        caption: "Pan con Pan",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Navegación por categorías complejas, fichas de producto claras y experiencia responsive optimizada para compradores profesionales del sector gastronómico.",
      },
    },
    {
      type: "list",
      props: {
        title: "Áreas trabajadas",
        items: ["Web design", "UX/UI", "Responsive", "Arquitectura de información"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
