<template>
  <section
    class="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-8xl mx-auto flex flex-col md:flex-row gap-8 items-center"
    data-aos="fade-up"
  >
    <img
      class="w-full md:w-1/2 rounded-lg shadow"
      :src="image"
      :alt="alt"
      data-aos="zoom-in"
    />
    <div class="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
      <h2 class="text-3xl md:text-4xl font-bold text-primary">
        {{ title }}
      </h2>
      <p class="text-lg text-gray-700 mt-4 leading-relaxed">
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default:
      'https://t4.ftcdn.net/jpg/01/43/88/31/360_F_143883132_bn9n14k3aX10bq5HN18IYHPbx9YyiSEA.jpg'
  },
  alt: {
    type: String,
    default: 'Зображення'
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>
