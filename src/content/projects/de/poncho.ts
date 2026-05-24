import type { ProjectContent } from "../../types";

export default {
  title: "Poncho Frontend",
  theme: "dark",
  tags: ["html", "css", "a11y"],
  videoBorder: false,
  live: "https://argob.github.io/poncho/",
  description:
    "Contribucion al desarrollo de Poncho, la libreria frontend oficial de la Administracion Publica Nacional de Argentina.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/poncho.jpg",
        alt: "Poncho Design System",
        caption: "Poncho Design System",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Libreria de componentes accesibles adoptada por organismos del Estado para garantizar coherencia visual e inclusion digital en servicios publicos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["Design system", "Bootstrap", "WCAG/ARIA", "Componentes reutilizables"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
