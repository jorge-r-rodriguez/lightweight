import type { ProjectContent } from "../../types";

export default {
  title: "Egraphics",
  theme: "dark",
  tags: ["wordpress", "uxui", "animation"],
  videoBorder: false,
  live: "https://egraphics.com.ar/",
  description:
    "Sitio corporativo con fuerte identidad visual para estudio de diseño, orientado a captar nuevos clientes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/egraphics.jpg",
        alt: "Egraphics",
        caption: "Egraphics",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Desarrollo de animaciónes CSS/JS, presentación de servicios con storytelling visual y arquitectura de experiencia. Ciclo completo: UX, diseño y desarrollo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Áreas trabajadas",
        items: ["WordPress", "UX design", "Animación CSS/JS", "Storytelling visual"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
