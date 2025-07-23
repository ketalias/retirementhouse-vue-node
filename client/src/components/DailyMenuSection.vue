<template>
  <section class="bg-white p-6 md:p-10" data-aos="fade-up">
    <h2
      class="text-5xl font-bold text-center text-secondary mb-6"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {{ title }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        :data-aos="'zoom-in'"
        :data-aos-delay="200 + index * 200"
      >
        <MenuCard
          :title="item.title"
          :items="item.items"
          :image="item.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import MenuCard from '@/components/MenuCard.vue';
import { defineProps } from 'vue';
defineProps({
  title: {
    type: String,
    default: 'Приклад Денного Меню'
  },
  menuItems: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (item) =>
          typeof item.title === 'string' &&
          Array.isArray(item.items) &&
          typeof item.image === 'string'
      )
  }
});
</script>
