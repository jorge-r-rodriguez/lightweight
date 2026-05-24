import type { ProjectContent } from "../../types";

export default {
  title: "Cienradios",
  theme: "dark",
  tags: ["react", "javascript", "uxui"],
  videoBorder: false,
  live: "https://ar.cienradios.com/",
  description:
    "La red de radios online mas grande de Argentina, con integracion de players de audio complejos y experiencia de escucha continua.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/cienradios.jpg",
        alt: "Cienradios",
        caption: "Cienradios",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Integracion de multiples streams simultaneos y continuidad de escucha sin interrupciones, cuidando performance y experiencia de usuario.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["React/JavaScript", "Audio streaming", "Players complejos", "Experiencia continua"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
