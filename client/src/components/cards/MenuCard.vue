<template>
  <div class="card bg-white shadow-md h-full">
    <div class="card-body space-y-4">
      <img :src="image" alt="" class="w-full h-70 object-cover rounded-md" v-if="image" />
      <h3 class="card-title text-2xl text-primary font-bold">{{ title }}</h3>
      <ul class="list-disc pl-4 text-sm space-y-1">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array,
  image: {
    type: String,
    default: ''
  }
})
</script>
