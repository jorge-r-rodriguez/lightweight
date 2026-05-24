<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);
const name = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = () => {
  const subject = encodeURIComponent(`Consulta portfolio - ${name.value || "Nuevo contacto"}`);
  const body = encodeURIComponent(
    [`Nombre: ${name.value}`, `Email: ${email.value}`, "", message.value].filter(Boolean).join("\n"),
  );

  window.location.href = `mailto:info@jorgerodriguez.es?subject=${subject}&body=${body}`;
};

onMounted(() => {
  if (contactElement.value) {
    transitions.contact.setup(contactElement.value);
  }
});

onUnmounted(() => {
  transitions.contact.destroy();
});
</script>

<template>
  <div class="contact grid" ref="contactElement">
    <div class="contact-content">
      <h2 class="contact-title" v-html="t('lets-work-together')"></h2>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <label class="contact-field">
          <span>Nombre</span>
          <input v-model="name" type="text" name="name" autocomplete="name" placeholder="Tu nombre" required />
        </label>
        <label class="contact-field">
          <span>Email</span>
          <input v-model="email" type="email" name="email" autocomplete="email" placeholder="tu@email.com" required />
        </label>
        <label class="contact-field">
          <span>Mensaje</span>
          <textarea
            v-model="message"
            name="message"
            rows="4"
            placeholder="Cuéntame qué necesitas resolver"
            required
          ></textarea>
        </label>
        <button class="contact-submit" type="submit">Enviar consulta</button>
      </form>
      <Social class="contact-social" variant="background" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  width: 100%;
  max-width: calc(var(--svw) * 100);
  overflow: hidden;
  min-height: calc(var(--lvh) * 100);
  padding: var(--space-outer);
  padding-top: var(--space-lg);

  @include mixins.mq("md") {
    padding-top: var(--space-xxl);
  }

  &-content {
    position: relative;
    padding-top: var(--space-md);
    grid-column: 1 / 13;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);

    @include mixins.mq("sm") {
      grid-column: 1 / 8;
    }

    @include mixins.mq("md") {
      gap: var(--space-md);
      grid-column: 1 / 6;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 6;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-md);

    @include mixins.mq("sm") {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.mq("xl") {
      font-size: var(--font-size-title-xl);
    }
  }

  &-form {
    width: min(100%, 420px);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    padding: var(--space-sm);
    border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 16%, transparent);
    border-radius: var(--radius-lg);
    background: color-mix(in srgb, var(--color-beige-400) 78%, white);
    box-shadow: 0 18px 60px color-mix(in srgb, var(--color-text-400) 10%, transparent);

    @include mixins.mq("md") {
      padding: var(--space-md);
    }
  }

  &-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: var(--font-size-sm);
    font-weight: 700;

    input,
    textarea {
      width: 100%;
      border: var(--stroke-sm) solid color-mix(in srgb, var(--color-text-400) 14%, transparent);
      border-radius: var(--radius-md);
      background: color-mix(in srgb, var(--color-beige-400) 60%, white);
      color: var(--color-text-400);
      font: inherit;
      font-weight: 500;
      line-height: 1.35;
      padding: 12px 14px;
      outline: none;
      transition:
        border-color 0.2s ease,
        background-color 0.2s ease;

      &:focus {
        border-color: var(--color-orange-400);
        background: var(--color-beige-400);
      }
    }

    textarea {
      min-height: 116px;
      resize: vertical;
    }
  }

  &-submit {
    width: fit-content;
    border: 0;
    border-radius: 999px;
    background: var(--color-orange-400);
    color: var(--color-white-400);
    cursor: pointer;
    font: inherit;
    font-weight: 900;
    padding: 13px 22px;
    margin-top: var(--space-xxs);
    transition:
      transform 0.2s ease,
      filter 0.2s ease;

    &:hover,
    &:focus-visible {
      transform: translateY(-1px);
      filter: brightness(1.04);
    }
  }

  &-social {
    margin-top: var(--space-xs);
  }
}
</style>
