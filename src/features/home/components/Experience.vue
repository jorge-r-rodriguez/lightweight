<script setup lang="ts">
const experience = [
  {
    date: "Nov 2023 - Presente",
    title: "Desarrollador Frontend Senior | Angular & Ionic",
    company: "Imatia",
    summary:
      "Desarrollo y evolución de SocialTV, una plataforma digital orientada a mejorar la comunicación y reducir el aislamiento social en personas mayores.",
    items: [
      "Desarrollo de nuevas funcionalidades con Angular, TypeScript e Ionic, cuidando escalabilidad, mantenibilidad y rendimiento.",
      "Mejoras de UX/UI y accesibilidad bajo estándares WCAG 2.1 AA para usuarios senior.",
      "Uso de IA generativa, LLMs, Prompt Engineering, RAG y herramientas como ChatGPT, Gemini, Claude y GitHub Copilot para acelerar desarrollo, documentación y análisis técnico.",
    ],
  },
  {
    date: "Mar 2023 - Nov 2023",
    title: "Lead UI Developer",
    company: "Adviters (Cliente: Fiserv / Mastercard)",
    summary:
      "Coordiné el desarrollo frontend de iniciativas de transformación digital para plataformas de pagos de Fiserv y Mastercard Latinoamérica.",
    items: [
      "Definición y evolución de arquitectura frontend basada en Angular, con foco en seguridad, rendimiento y escalabilidad.",
      "Construcción de una librería de componentes reutilizables para mejorar consistencia y acelerar tiempos de desarrollo.",
      "Mentoría técnica, code reviews y decisiones arquitectónicas orientadas a calidad, accesibilidad y performance.",
    ],
  },
  {
    date: "Nov 2021 - Feb 2023",
    title: "Frontend eCommerce Manager",
    company: "Wabi Project (The Coca-Cola Company)",
    summary:
      "Desarrollé y evolucioné soluciones frontend dentro del ecosistema digital de Wabi Project, orientado a la digitalización de pequeños comercios.",
    items: [
      "Participación en productos estratégicos como Wabi2B, Wabi2You, Wabi2C y WabiPay.",
      "Consolidación del Design System para promover reutilización de componentes, consistencia visual y escalabilidad.",
      "Trabajo con equipos de producto, diseño y desarrollo para impulsar adopción digital en mercados de Latinoamérica.",
    ],
  },
  {
    date: "Oct 2020 - Nov 2021",
    title: "UX/UI Designer & Frontend Developer",
    company: "Soflex",
    summary:
      "Participé en el diseño, desarrollo y evolución de la arquitectura frontend del SISEP, plataforma estratégica para seguridad pública y emergencias.",
    items: [
      "Desarrollo de aplicaciones web y móviles con Angular y Angular Material para operación en tiempo real.",
      "Implementación de funcionalidades geoespaciales con Google Maps API, OpenLayers, Leaflet y GIS.",
      "Modernización tecnológica de servicios públicos con foco en eficiencia operativa, UX y arquitectura frontend.",
    ],
  },
  {
    date: "Oct 2019 - Oct 2020",
    title: "Senior Frontend Developer Angular (Banca)",
    company: "ICBC Argentina",
    summary:
      "Desarrollo y mantenimiento de aplicaciones web y móviles para el sector bancario utilizando Angular y Kendo UI.",
    items: [
      "Gestión de versiones, despliegues y resolución de incidencias en entornos de QA y producción.",
      "Optimización de rendimiento, mantenimiento evolutivo y mejora continua en entornos financieros regulados.",
      "Integración de soluciones de validación biométrica e identidad digital mediante reconocimiento facial.",
    ],
  },
  {
    date: "Ago 2018 - Oct 2019",
    title: "Senior Frontend Developer",
    company: "Secretaría de Innovación Pública - Modernización",
    summary:
      "Desarrollo, mantenimiento y evolución de plataformas web y móviles para organismos de la Administración Pública.",
    items: [
      "Implementación de soluciones basadas en Drupal adaptadas a requerimientos gubernamentales.",
      "Trabajo con librerías y frameworks propios de la administración pública para asegurar integración y consistencia.",
      "Optimización de UX/UI, rendimiento y gestión de contenidos para servicios públicos modernos y accesibles.",
    ],
  },
  {
    date: "Ene 2012 - Jun 2018",
    title: "Senior Frontend Developer - UX/UI Designer",
    company: "Ondiss",
    summary:
      "Lideré el desarrollo frontend y la evolución de la experiencia digital de múltiples plataformas basadas en Umbraco CMS.",
    items: [
      "Definición de estrategias web alineadas con objetivos de negocio, adquisición de usuarios y optimización de conversiones.",
      "Mejora de arquitectura de información, experiencia de usuario, SEO técnico, On-Page y Off-Page.",
      "Investigación de usuarios, análisis de comportamiento y seguimiento de métricas para optimizar usabilidad y rendimiento.",
    ],
  },
  {
    date: "Dic 2009 - Ene 2012",
    title: "Senior Frontend Developer",
    company: "CMD - Grupo Clarín",
    summary: "Desarrollé e integré interfaces HTML, CSS y JavaScript para sitios de alto tráfico como TN y El Trece TV.",
    items: [
      "Implementación y optimización de plataformas Drupal y WordPress.",
      "Mejora de eficiencia en gestión de contenidos y flujos de trabajo.",
      "Optimización de SEO, performance y experiencia de usuario en plataformas digitales masivas.",
    ],
  },
  {
    date: "Ago 2007 - Ene 2009",
    title: "UX/UI Designer & Senior Frontend Developer",
    company: "CIMEXTEL",
    summary:
      "Desarrollo de sistemas de facturación online e implementación de soluciones VoIP mediante Asterisk Software.",
    items: [
      "Configuración y optimización de servidores y sistemas de radioenlaces.",
      "Diseño y desarrollo de interfaces para sistemas internos.",
      "Trabajo con Liferay y soluciones técnicas orientadas a operación empresarial.",
    ],
  },
  {
    date: "Jul 2006 - Jul 2007",
    title: "Programador C++",
    company: "Protección Total S.A.",
    summary: "Desarrollo e implementación de sistemas de geolocalización GPS y monitoreo de alarmas.",
    items: [
      "Programación de equipos satelitales para seguimiento y monitoreo.",
      "Implementación de soluciones de geolocalización aplicadas a seguridad.",
      "Desarrollo de herramientas internas con foco operativo.",
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
