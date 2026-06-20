<script setup lang="ts">
const experience = [
  {
    date: "Nov 2023",
    title: "Senior Frontend Developer (Angular & Ionic)",
    company: "Imatia Innovation",
    summary: "Desarrollo de Social TV, una plataforma crítica para combatir la soledad en adultos mayores.",
    items: [
      "Optimización radical de UX/UI y cumplimiento de estándares de accesibilidad para público senior.",
      "Migración estratégica de funcionalidades BackOffice a una App Móvil Híbrida (Ionic + Angular).",
      "Stack: Angular 19, Ionic 7, RxJS, Tailwind CSS.",
    ],
  },
  {
    date: "Mar 2023 - Nov 2023",
    title: "Engineering Manager",
    company: "Adviters (Cliente: Fiserv / Mastercard)",
    summary: "Dirigí la transformación técnica del área de pagos digitales, gestionando equipos multidisciplinarios.",
    items: [
      "Definición de arquitectura frontend escalable y segura para el sector fintech.",
      "Implementación de metodologías ágiles y CI/CD para acelerar el time-to-market.",
      "Mentoring técnico y elevación de los estándares de calidad de código.",
      "Stack: Angular 14-15, Material UI, TypeScript, RxJS, Scrum/Kanban.",
    ],
  },
  {
    date: "Nov 2021 - Feb 2023",
    title: "Frontend eCommerce Manager",
    company: "Wabi Project (The Coca-Cola Company)",
    summary: "Orquesté la arquitectura frontend de un ecosistema de marketplace global (Wabi2B, WabiPay).",
    items: [
      "Integración y evolución del Design System corporativo para garantizar coherencia de marca.",
      "Optimización de performance en aplicaciones de alto tráfico para mercados internacionales.",
      "Stack: Angular 14, Angular Material, Bootstrap.",
    ],
  },
  {
    date: "Oct 2020 - Nov 2021",
    title: "UX/UI Designer & Frontend Developer",
    company: "Soflex",
    summary: "Diseño de soluciones SaaS críticas para seguridad pública y logística.",
    items: [
      "Modernización del Sistema Integral de Emergencias (Policía/Bomberos) usando tecnología GIS.",
      "Desarrollo de interfaces complejas de despacho y monitoreo en tiempo real.",
      "Stack: Angular 12, Google Maps Platform, Leaflet.",
    ],
  },
  {
    date: "Oct 2019 - Oct 2020",
    title: "Senior Frontend Developer",
    company: "ICBC Argentina",
    summary: "Optimización de la banca digital para millones de usuarios.",
    items: [
      "Mejora sustancial en la performance de operaciones bancarias críticas.",
      "Desarrollo de componentes financieros avanzados con KendoUI.",
      "Stack: Angular 8-9, TypeScript, RxJS, KendoUI.",
    ],
  },
  {
    date: "Mar 2019 - Oct 2019",
    title: "Senior Frontend Developer",
    company: "Secretaría de Innovación Pública Argentina",
    summary:
      "Desarrollé y mantuve plataformas web y móviles gubernamentales en Drupal y WordPress, asegurando requerimientos institucionales.",
    items: [
      "Trabajo con librerías propias de la administración de gobierno, optimizando UX/UI y rendimiento.",
      "Stack: Drupal, WordPress, UX/UI, Accesibilidad (WCAG, ARIA).",
    ],
  },
  {
    date: "Ene 2012 - Jun 2018",
    title: "Senior Frontend Developer",
    company: "Hipódromo Argentino de Palermo",
    summary:
      "Diseñé, desarrollé e implementé Ondiss, la plataforma líder de juego online en Argentina.",
    items: [
      "Arquitectura frontend en un entorno de alto tráfico y seguridad crítica.",
      "UX/UI avanzado, optimización SEO y estrategias de accesibilidad.",
      "Stack: Umbraco CMS, HTML, CSS, SCSS, JavaScript, SEO.",
    ],
  },
  {
    date: "Dic 2009 - Ene 2012",
    title: "Senior Frontend Developer",
    company: "CMD - Grupo Clarín",
    summary: "Desarrollé e integré interfaces para sitios de tráfico masivo como TN y El Trece TV.",
    items: [
      "Optimización de CMS (Drupal, WordPress) y mejora de flujos de trabajo.",
      "Optimización de SEO y performance para millones de usuarios.",
      "Stack: Drupal, WordPress, HTML, CSS, JavaScript.",
    ],
  },
];
</script>

<template>
  <section class="experience grid">
    <div class="experience-heading">
      <h2>Trayectoria <span>Laboral</span></h2>
    </div>
    <div class="experience-timeline">
      <article v-for="job in experience" :key="`${job.date}-${job.company}`" class="experience-item">
        <div class="experience-dot"></div>
        <p class="experience-date">{{ job.date }}</p>
        <div class="experience-content">
          <h3>{{ job.title }}</h3>
          <h4>{{ job.company }}</h4>
          <p>{{ job.summary }}</p>
          <ul>
            <li v-for="item in job.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience {
  width: 100%;
  padding: 96px var(--space-outer);
  background: var(--color-beige-400);
  color: var(--color-text-400);

  @include mixins.mq("md") {
    padding-top: 144px;
    padding-bottom: 144px;
  }

  &-heading {
    grid-column: 1 / 13;

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }

    h2 {
      font-size: var(--font-size-title-md);
      font-weight: 900;
      letter-spacing: 0.02em;
      line-height: var(--line-height-title);

      @include mixins.mq("sm") {
        font-size: var(--font-size-title-lg);
      }
    }

    span {
      color: var(--color-orange-400);
    }
  }

  &-timeline {
    grid-column: 1 / 13;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    margin-top: var(--space-xl);

    @include mixins.mq("md") {
      grid-column: 3 / 12;
      padding-left: 48px;
      margin-top: var(--space-xxl);

      &::before {
        content: "";
        position: absolute;
        top: 10px;
        bottom: 0;
        left: 9px;
        width: 1px;
        background: color-mix(in srgb, var(--color-text-400) 18%, transparent);
      }
    }

    @include mixins.mq("xl") {
      grid-column: 3 / 11;
    }
  }

  &-item {
    position: relative;
    display: grid;
    gap: var(--space-sm);
  }

  &-dot {
    display: none;

    @include mixins.mq("md") {
      display: block;
      position: absolute;
      top: 3px;
      left: -47px;
      width: 18px;
      height: 18px;
      border: 2px solid var(--color-orange-400);
      border-radius: 50%;
      background: var(--color-beige-400);
      box-shadow: inset 0 0 0 4px var(--color-beige-400);

      &::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        background: var(--color-orange-400);
      }
    }
  }

  &-date {
    color: var(--color-orange-400);
    font-size: var(--font-size-sm);
    font-weight: 900;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    max-width: 860px;

    h3 {
      color: var(--color-text-400);
      font-size: var(--font-size-title-xs);
      line-height: 1.15;
      font-weight: 900;
    }

    h4 {
      color: color-mix(in srgb, var(--color-text-400) 68%, transparent);
      font-size: var(--font-size-lg);
      font-weight: 500;
    }

    p,
    li {
      color: color-mix(in srgb, var(--color-text-400) 78%, transparent);
      line-height: var(--line-height-copy);
    }

    strong {
      color: var(--color-text-400);
    }

    ul {
      list-style: disc;
      padding-left: 1.2em;
      margin-top: var(--space-xxs);
    }

    li + li {
      margin-top: 6px;
    }
  }
}
</style>
