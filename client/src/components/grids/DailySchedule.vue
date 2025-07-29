<template>
  <section
    class="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-4xl mx-auto"
    data-aos="fade-up"
  >
    <h2 class="text-5xl font-bold text-primary mb-4 text-center">
      {{ title }}
    </h2>
    <ul
      class="list-disc pl-6 text-lg text-gray-700 space-y-2 mt-4 ml-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <li v-for="(item, index) in schedule" :key="index">
        <strong>{{ item.time }}</strong> — {{ item.activity }}
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Розпорядок дня'
  },
  schedule: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (item) =>
          typeof item.time === 'string' && typeof item.activity === 'string'
      )
  }
});
</script>
