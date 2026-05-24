<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { transitions } from "../../../animations";
import { t } from "../../../i18n/utils/translate";
import Social from "../../../components/Social.vue";

const contactElement = ref<HTMLElement | null>(null);
const name = ref("");
const email = ref("");
const message = ref("");
const company = ref("");
const status = ref<"idle" | "sending" | "success" | "error">("idle");
const statusMessage = ref("");

const resetForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
  company.value = "";
};

const handleSubmit = async () => {
  status.value = "sending";
  statusMessage.value = "";

  const formData = new FormData();
  formData.append("name", name.value);
  formData.append("email", email.value);
  formData.append("message", message.value);
  formData.append("company", company.value);

  try {
    const response = await fetch("/enviar-contacto.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.success) {
      status.value = "error";
      statusMessage.value = result?.message || "Ocurrio un error al enviar el formulario.";
      return;
    }

    status.value = "success";
    statusMessage.value = result.message;
    resetForm();
  } catch {
    status.value = "error";
    statusMessage.value = "Error de conexion. Intenta de nuevo mas tarde.";
  }
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
        <label class="contact-field contact-field-honeypot" aria-hidden="true">
          <span>Empresa</span>
          <input v-model="company" type="text" name="company" autocomplete="off" tabindex="-1" />
        </label>
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
        <button class="contact-submit" type="submit" :disabled="status === 'sending'">
          {{ status === "sending" ? "Enviando..." : "Enviar consulta" }}
        </button>
        <p v-if="statusMessage" :class="['contact-message', `contact-message-${status}`]" role="status">
          {{ statusMessage }}
        </p>
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
      grid-column: 1 / 7;
      padding-top: var(--space-lg);
    }

    @include mixins.mq("lg") {
      grid-column: 2 / 7;
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
    width: min(100%, 540px);
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

    &-honeypot {
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
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

    &:disabled {
      cursor: wait;
      opacity: 0.62;
      transform: none;
    }

    &:hover,
    &:focus-visible {
      transform: translateY(-1px);
      filter: brightness(1.04);
    }
  }

  &-message {
    margin-top: var(--space-xxs);
    padding: 12px 14px;
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: 700;
    line-height: 1.35;

    &-success {
      color: #137c38;
      background: rgba(34, 197, 94, 0.14);
      border: var(--stroke-sm) solid rgba(34, 197, 94, 0.28);
    }

    &-error {
      color: #b42318;
      background: rgba(239, 68, 68, 0.12);
      border: var(--stroke-sm) solid rgba(239, 68, 68, 0.24);
    }
  }

  &-social {
    margin-top: var(--space-xs);
  }
}
</style>
