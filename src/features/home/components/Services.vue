<script setup lang="ts">
const services = [
  {
    icon: "01",
    title: "Consultoria y diagnostico digital",
    text: "Analisis de web, experiencia de usuario, SEO local, Google Business, canales de captacion, reputacion online y puntos de fuga en el proceso de reserva o contacto.",
  },
  {
    icon: "02",
    title: "Gestion de captacion y conversion",
    text: "Landing pages, formularios, campanas, contenidos, medicion, email marketing y flujos para recuperar interesados en rutas, reservas, menus, alojamientos o experiencias concretas.",
  },
  {
    icon: "03",
    title: "Asistentes IA y automatizacion operativa",
    text: "Asistentes 24/7 para preguntas frecuentes, reservas, disponibilidad y precios, conectados a formularios, CRM, email o WhatsApp para reducir carga manual y acelerar la respuesta.",
  },
];
</script>

<template>
  <section class="services grid">
    <div class="services-heading">
      <p class="services-kicker">Servicios</p>
      <h2>Desarrollo Web & <span>Automatizacion para empresas</span></h2>
    </div>
    <div class="services-list">
      <article v-for="service in services" :key="service.title" class="services-card">
        <div class="services-card-heading">
          <div class="services-card-mark">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
        </div>
        <div class="services-card-copy">
          <p>{{ service.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services {
  width: 100%;
  padding: 96px var(--space-outer);
  background: var(--color-beige-400);
  color: var(--color-text-400);

  @include mixins.mq("md") {
    padding-top: 136px;
    padding-bottom: 136px;
  }

  &-heading {
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
    }

    h2 {
      max-width: 980px;
      font-size: var(--font-size-title-sm);
      font-weight: 900;
      letter-spacing: 0.02em;
      line-height: 1.08;

      @include mixins.mq("md") {
        font-size: var(--font-size-title-md);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-lg);
      }
    }

    span {
      color: var(--color-orange-400);
    }
  }

  &-kicker {
    width: fit-content;
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 16%, transparent);
    border-radius: 999px;
    color: color-mix(in srgb, var(--color-text-400) 68%, transparent);
    font-size: var(--font-size-sm);
    font-weight: 900;
    letter-spacing: 0.08em;
    padding: 8px 14px;
    text-transform: uppercase;
  }

  &-list {
    grid-column: 1 / 13;
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-md);
    margin-top: var(--space-xl);

    @include mixins.mq("md") {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 12;
      margin-top: var(--space-xxl);
    }
  }

  &-card {
    min-height: 260px;
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding: clamp(24px, 3vw, 34px);
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 12%, transparent);
    border-radius: var(--radius-lg);
    background:
      linear-gradient(180deg, color-mix(in srgb, white 44%, transparent), transparent),
      color-mix(in srgb, var(--color-beige-400) 84%, white);
    box-shadow: 0 18px 60px color-mix(in srgb, var(--color-text-400) 8%, transparent);
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    @include mixins.hover {
      &:hover {
        transform: translateY(-4px);
        border-color: color-mix(in srgb, var(--color-orange-400) 44%, transparent);
        box-shadow: 0 24px 70px color-mix(in srgb, var(--color-orange-400) 16%, transparent);
      }
    }

    &-mark {
      width: 52px;
      height: 52px;
      flex: 0 0 52px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--color-orange-400);
      color: var(--color-white-400);
      font-size: var(--font-size-sm);
      font-weight: 900;
    }

    &-heading {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      min-height: 64px;

      h3 {
        max-width: 290px;
        font-size: var(--font-size-title-xs);
        font-weight: 900;
        line-height: 1.12;
      }
    }

    &-copy {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);

      p {
        color: color-mix(in srgb, var(--color-text-400) 72%, transparent);
        line-height: var(--line-height-copy);
      }
    }
  }
}
</style>
