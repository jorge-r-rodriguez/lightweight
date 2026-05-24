import type { ProjectContent } from "../../types";

export default {
  title: "Tienda Coca-Cola",
  theme: "dark",
  tags: ["angular", "ecommerce", "uxui"],
  videoBorder: false,
  live: "https://tienda.coca-cola.com.ar/",
  description:
    "Frontend eCommerce Manager en Wabi Project. Lidere el desarrollo y evolucion del Design System corporativo para la tienda oficial de Coca-Cola Argentina, parte del ecosistema Wabi.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: "/projects/cocacola.jpg",
        alt: "Tienda Coca-Cola",
        caption: "Tienda Coca-Cola Argentina",
      },
    },
    {
      type: "text",
      props: {
        title: "Contexto",
        text: "Plataforma global B2B/B2C activa en 14 paises con mas de 500.000 clientes registrados. Trabajo centrado en componentes reutilizables, consistencia visual y escalabilidad del storefront.",
      },
    },
    {
      type: "list",
      props: {
        title: "Stack y foco",
        items: ["Angular 14", "Angular Material", "Design System corporativo", "eCommerce y experiencia de compra"],
        size: "md",
      },
    },
  ],
} as const satisfies ProjectContent;
