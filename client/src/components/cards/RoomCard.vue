<template>
  <div
    class="card bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
  >
    <figure>
      <img :src="image" alt="Room photo" class="w-full h-48 object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-xl font-semibold">{{ title }}</h2>
      <p class="text-base text-base-content/80 mt-2">{{ description }}</p>

      <div v-if="features?.length" class="mt-4">
        <ul class="list-disc list-inside text-base text-base-content/70">
          <li v-for="(feature, index) in features" :key="index">{{ feature }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  features: Array,
})
</script>
