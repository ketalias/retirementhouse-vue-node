<template>
  <div
    class="relative hero h-[40vh] md:h-[70svh] bg-cover bg-center"
    :style="{ backgroundImage: `url('${background}')` }"
    data-aos="fade-in"
  >
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 text-center px-4 h-full flex flex-col justify-center items-center">
      <h1
        class="mb-5 text-5xl md:text-8xl font-bold text-white"
        data-aos="fade-up"
      >
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mb-5 text-2xl text-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {{ subtitle }}
      </p>

      <slot />
    </div>
  </div>
</template>

      

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: 'https://example.com/default-background.jpg'
  }
});
</script>
