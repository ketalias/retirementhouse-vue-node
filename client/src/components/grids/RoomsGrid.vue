<script setup>
import RoomCard from '../cards/RoomCard.vue'
import { defineProps, defineEmits } from 'vue'
import { roomItems as rooms } from '@/data/roomsData.js'

defineProps({
  rooms: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(room => 'id' in room && 'images' in room)
  }
})

const emit = defineEmits(['open-lightbox'])

function openLightbox(index) {
  emit('open-lightbox', index)
}
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="(room, index) in rooms"
      :key="room.id"
      @click="openLightbox(index)"
      class="cursor-pointer"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <RoomCard
        :image="room.images[0]"
        :title="room.title"
        :description="room.description"
        :features="room.features"
      />
    </div>
  </div>
</template>
