import type { ProjectContent } from "../../types";

export default {
  title: "Egraphics",
  theme: "dark",
  tags: ["wordpress", "uxui", "animation"],
  videoBorder: false,
  live: "https://egraphics.com.ar/",
  description:
    "Sitio corporativo con fuerte identidad visual para estudio de diseno, orientado a captar nuevos clientes.",
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
        text: "Desarrollo de animaciones CSS/JS, presentacion de servicios con storytelling visual y arquitectura de experiencia. Ciclo completo: UX, diseno y desarrollo.",
      },
    },
    {
      type: "list",
      props: {
        title: "Areas trabajadas",
        items: ["WordPress", "UX design", "Animacion CSS/JS", "Storytelling visual"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
