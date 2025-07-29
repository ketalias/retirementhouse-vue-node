<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import HeroSection from '@/components/sections/HeroSection.vue'
import RoomsGrid from '@/components/grids/RoomsGrid.vue'
import FormComp from '@/components/forms/FormComp.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import { roomItems as roomsList } from '@/data/roomsData.js'

const visible = ref(false)
const activeIndex = ref(0)
const lightboxImageIndex = ref(0)

function handleOpenLightbox(index) {
  activeIndex.value = index
  lightboxImageIndex.value = 0
  visible.value = true
}

function prevImage() {
  if (lightboxImageIndex.value > 0) {
    lightboxImageIndex.value--
  }
}

function nextImage() {
  if (lightboxImageIndex.value < (roomsList[activeIndex.value].images.length - 1)) {
    lightboxImageIndex.value++
  }
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="min-h-screen bg-white">
      <HeroSection title="Наші кімнати" subtitle="Комфортні та затишні кімнати для вашого відпочинку"
        background="/img/rooms-bg.jpg" />
      <div class="container mx-auto px-4 my-10">
        <RoomsGrid :rooms="roomsList" @open-lightbox="handleOpenLightbox" />
      </div>
    </div>
    <VueEasyLightbox :visible="visible" :imgs="roomsList[activeIndex]?.images || []" :index="lightboxImageIndex"
      @hide="visible = false" @on-prev="prevImage" @on-next="nextImage" :moveDisabled="true" />
    <FormComp />
    <FooterComp />
  </div>
</template>
