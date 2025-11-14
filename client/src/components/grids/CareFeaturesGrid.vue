<template>
  <section class="py-16 px-4 md:px-10 bg-base-100 text-center">
    <h2 class="text-4xl font-bold mb-12 text-base-content">
      {{ t('home_page.care_features.title') }}
    </h2>
    <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 max-w-8xl mx-auto">
      <div v-for="(item, index) in features" :key="index"
        class="card bg-white shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[280px]">
        <div class="w-full md:w-1/2 h-48 md:h-auto">
          <img :src="images[index]" :alt="item.title" class="w-full h-full object-cover object-center" />
        </div>
        <div class="flex-1 flex flex-col justify-center p-6 text-center md:text-left">
          <h3 class="text-2xl font-semibold text-primary mb-2">
            {{ item.title }}
          </h3>
          <p class="text-md font-medium text-base-content/80">
            {{ item.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t, tm } = useI18n()
const features = computed(() => tm('home_page.care_features.features'));
const images = [
  '/no.png',
  '/img/granny1.jpg',
  '/no.png',]
</script>
