<script setup>
import RoomCard from '../cards/RoomCard.vue'
import ImageSlider from './ImageSlider.vue'
import { ref } from 'vue'

const props = defineProps({
  rooms: {
    type: Array,
    required: true,
    validator: (arr) => arr.every(room => 'id' in room && 'images' in room)
  }
})

const sliderOpen = ref(false)
const sliderImages = ref([])
const sliderIndex = ref(0)

function openSlider(room) {
  sliderImages.value = room.images
  sliderIndex.value = 0
  sliderOpen.value = true
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="room in rooms"
      :key="room.id"
      @click="openSlider(room)"
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

  <ImageSlider
    v-if="sliderOpen"
    :images="sliderImages"
    :startIndex="sliderIndex"
    @close="sliderOpen = false"
  />
</template>
