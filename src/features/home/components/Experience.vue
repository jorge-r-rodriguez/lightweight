<script setup lang="ts">
const experience = [
  {
    date: "Nov 2023",
    title: "Senior Frontend Developer (Angular & Ionic)",
    company: "Imatia Innovation",
    summary: "Desarrollo de Social TV, una plataforma critica para combatir la soledad en adultos mayores.",
    items: [
      "Optimizacion radical de UX/UI y cumplimiento de estandares de accesibilidad para publico senior.",
      "Migracion estrategica de funcionalidades BackOffice a una App Movil Hibrida (Ionic + Angular).",
      "Stack: Angular 19, Ionic 7, RxJS, Tailwind CSS.",
    ],
  },
  {
    date: "Mar 2023 - Nov 2023",
    title: "Engineering Manager",
    company: "Adviters (Cliente: Fiserv / Mastercard)",
    summary: "Dirigi la transformacion tecnica del area de pagos digitales, gestionando equipos multidisciplinarios.",
    items: [
      "Definicion de arquitectura frontend escalable y segura para el sector fintech.",
      "Implementacion de metodologias agiles y CI/CD para acelerar el time-to-market.",
      "Mentoring tecnico y elevacion de los estandares de calidad de codigo.",
      "Stack: Angular 14-15, Material UI, TypeScript, RxJS, Scrum/Kanban.",
    ],
  },
  {
    date: "Nov 2021 - Feb 2023",
    title: "Frontend eCommerce Manager",
    company: "Wabi Project (The Coca-Cola Company)",
    summary: "Orqueste la arquitectura frontend de un ecosistema de marketplace global (Wabi2B, WabiPay).",
    items: [
      "Integracion y evolucion del Design System corporativo para garantizar coherencia de marca.",
      "Optimizacion de performance en aplicaciones de alto trafico para mercados internacionales.",
      "Stack: Angular 14, Angular Material, Bootstrap.",
    ],
  },
  {
    date: "Oct 2020 - Nov 2021",
    title: "UX/UI Designer & Frontend Developer",
    company: "Soflex",
    summary: "Diseno de soluciones SaaS criticas para seguridad publica y logistica.",
    items: [
      "Modernizacion del Sistema Integral de Emergencias (Policia/Bomberos) usando tecnologia GIS.",
      "Desarrollo de interfaces complejas de despacho y monitoreo en tiempo real.",
      "Stack: Angular 12, Google Maps Platform, Leaflet.",
    ],
  },
  {
    date: "Oct 2019 - Oct 2020",
    title: "Senior Frontend Developer",
    company: "ICBC Argentina",
    summary: "Optimizacion de la banca digital para millones de usuarios.",
    items: [
      "Mejora sustancial en la performance de operaciones bancarias criticas.",
      "Desarrollo de componentes financieros avanzados con KendoUI.",
      "Stack: Angular 8-9, TypeScript, RxJS, KendoUI.",
    ],
  },
  {
    date: "Mar 2019 - Oct 2019",
    title: "Senior Frontend Developer",
    company: "Secretaria de Innovacion Publica Argentina",
    summary:
      "Desarrolle y mantuve plataformas web y moviles gubernamentales en Drupal y WordPress, asegurando requerimientos institucionales.",
    items: [
      "Trabajo con librerias propias de la administracion de gobierno, optimizando UX/UI y rendimiento.",
      "Stack: Drupal, WordPress, UX/UI, Accesibilidad (WCAG, ARIA).",
    ],
  },
  {
    date: "Ene 2012 - Jun 2018",
    title: "Senior Frontend Developer",
    company: "Hipodromo Argentino de Palermo",
    summary:
      "Disene, desarrolle e implemente Ondiss, la plataforma lider de juego online en Argentina.",
    items: [
      "Arquitectura frontend en un entorno de alto trafico y seguridad critica.",
      "UX/UI avanzado, optimizacion SEO y estrategias de accesibilidad.",
      "Stack: Umbraco CMS, HTML, CSS, SCSS, JavaScript, SEO.",
    ],
  },
  {
    date: "Dic 2009 - Ene 2012",
    title: "Senior Frontend Developer",
    company: "CMD - Grupo Clarin",
    summary: "Desarrolle e integre interfaces para sitios de trafico masivo como TN y El Trece TV.",
    items: [
      "Optimizacion de CMS (Drupal, WordPress) y mejora de flujos de trabajo.",
      "Optimizacion de SEO y performance para millones de usuarios.",
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
  background:
    radial-gradient(circle at 78% 8%, rgba(47, 173, 255, 0.12), transparent 28%),
    #101829;
  color: var(--color-white-400);

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
      color: #2fb4ff;
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
        background: rgba(255, 255, 255, 0.18);
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
      border: 2px solid #2fb4ff;
      border-radius: 50%;
      background: #101829;
      box-shadow: inset 0 0 0 4px #101829;

      &::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: inherit;
        background: #2fb4ff;
      }
    }
  }

  &-date {
    color: #2fb4ff;
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
      color: var(--color-white-400);
      font-size: var(--font-size-title-xs);
      line-height: 1.15;
      font-weight: 900;
    }

    h4 {
      color: rgba(255, 255, 255, 0.68);
      font-size: var(--font-size-lg);
      font-weight: 500;
    }

    p,
    li {
      color: rgba(255, 255, 255, 0.82);
      line-height: var(--line-height-copy);
    }

    strong {
      color: var(--color-white-400);
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
