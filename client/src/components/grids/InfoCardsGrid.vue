<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <InfoCard
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
    />
  </div>
</template>

<script setup>
import InfoCard from './cards/InfoCard.vue'

defineProps({
  cards: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (item) =>
          typeof item.title === 'string' && typeof item.description === 'string'
      )
  }
})
</script>
