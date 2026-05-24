import type { ProjectContent } from "../../types";

export default {
  title: "The Rock Store",
  theme: "dark",
  tags: ["ecommerce", "woocommerce", "uxui"],
  videoBorder: false,
  live: "https://therockstore.com.ar/",
  description:
    "Diseno y desarrollo integral del eCommerce de la primera casa de musica y audio profesional online de Argentina.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/rockstore.jpg",
        alt: "The Rock Store",
        caption: "The Rock Store",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Ciclo completo: UX research, arquitectura de informacion, diseno visual y desarrollo frontend. Enfoque en reducir friccion en el proceso de compra de productos de alto valor.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["eCommerce", "WooCommerce", "UX/UI", "Optimizacion de checkout"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
