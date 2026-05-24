import type { ProjectContent } from "../../types";

export default {
  title: "IADPI",
  theme: "dark",
  tags: ["wordpress", "a11y", "html"],
  videoBorder: false,
  live: "https://iadpi.com.ar/",
  description:
    "Portal institucional para el Instituto Argentino de Derecho Procesal Informatico, con foco en accesibilidad y estructura semantica.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/iadpi.jpg",
        alt: "IADPI",
        caption: "IADPI",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Desarrollo frontend para publico juridico y academico. Diseno formal, legible, de carga liviana y con foco en accesibilidad WCAG.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["WordPress", "Accesibilidad", "Frontend semantico", "Performance"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
