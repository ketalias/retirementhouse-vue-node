<template>
  <div class="relative hero h-[50vh] md:h-[50svh] bg-cover bg-center"
    :style="{ backgroundImage: `url('${background}')` }" data-aos="fade-in">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 text-center px-4 h-full flex flex-col justify-center items-center">
      <h1 class="mb-5 text-5xl md:text-8xl font-bold text-white" data-aos="fade-up">
        {{ t(titleKey) }}
      </h1>
      <p v-if="subtitleKey" class="mb-5 md:text-3xl text-xl text-white" data-aos="fade-up" data-aos-delay="200">
        {{ t(subtitleKey) }}
      </p>

      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  titleKey: {
    type: String,
    default: 'hero.title'
  },
  subtitleKey: {
    type: String,
    default: 'hero.subtitle'
  },
  background: {
    type: String,
    default: 'https://example.com/default-background.jpg'
  }
});
</script>
