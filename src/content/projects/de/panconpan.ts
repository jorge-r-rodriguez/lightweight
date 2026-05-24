import type { ProjectContent } from "../../types";

export default {
  title: "Pan con Pan",
  theme: "dark",
  tags: ["uxui", "responsive", "html"],
  videoBorder: false,
  live: "https://www.panconpan.com.ar/",
  description:
    "Diseno UX/UI y desarrollo frontend para plataforma de equipamiento gastronomico, con arquitectura visual orientada a conversion.",
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
        text: "Navegacion por categorias complejas, fichas de producto claras y experiencia responsive optimizada para compradores profesionales del sector gastronomico.",
      },
    },
    {
      type: "list",
      props: {
        title: "Areas trabajadas",
        items: ["Web design", "UX/UI", "Responsive", "Arquitectura de informacion"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
