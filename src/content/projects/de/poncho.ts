import type { ProjectContent } from "../../types";

export default {
  title: "Poncho Frontend",
  theme: "dark",
  tags: ["html", "css", "a11y"],
  videoBorder: false,
  live: "https://argob.github.io/poncho/",
  description:
    "Contribución al desarrollo de Poncho, la librería frontend oficial de la Administración Pública Nacional de Argentina.",
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
        text: "Librería de componentes accesibles adoptada por organismos del Estado para garantizar coherencia visual e inclusión digital en servicios públicos.",
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
