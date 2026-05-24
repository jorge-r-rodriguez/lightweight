import type { ProjectContent } from "../../types";

export default {
  title: "Polotop",
  theme: "dark",
  tags: ["woocommerce", "branding", "uxui"],
  videoBorder: false,
  live: "https://polotop.com/",
  description:
    "eCommerce de indumentaria deportiva con identidad de marca solida y experiencia de compra optimizada para mobile.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/polotop.jpg",
        alt: "Polotop",
        caption: "Polotop",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Diseno visual centrado en fotografia de producto, navegacion agil por categorias y proceso de checkout optimizado para dispositivos moviles.",
      },
    },
    {
      type: "list",
      props: {
        title: "Areas trabajadas",
        items: ["WooCommerce", "Branding", "Web design", "Checkout mobile"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
