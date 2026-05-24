import type { ProjectContent } from "../../types";

export default {
  title: "Seguridad GBA",
  theme: "dark",
  tags: ["angular", "uxui", "a11y"],
  videoBorder: false,
  live: "https://seguridad.gba.gob.ar/#/home",
  description:
    "PWA gubernamental para denuncias y gestion de seguridad ciudadana de la Provincia de Buenos Aires, un territorio con mas de 17 millones de habitantes.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/seguridadgba.jpg",
        alt: "Seguridad GBA",
        caption: "Seguridad GBA",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Desarrollo de arquitectura frontend con Angular Material, priorizando accesibilidad, rendimiento en redes moviles y cumplimiento de estandares publicos.",
      },
    },
    {
      type: "list",
      props: {
        title: "Areas trabajadas",
        items: ["Angular Material", "PWA gubernamental", "Accesibilidad", "Rendimiento mobile"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
