<script setup>
import { ref, computed } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import RoomsGrid from '@/components/grids/RoomsGrid.vue'
import ImageSlider from '@/components/grids/ImageSlider.vue'
import FormComp from '@/components/forms/FormComp.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import { roomItems as roomsList } from '@/data/roomsData.js'

const sliderOpen = ref(false)
const activeIndex = ref(0)
const sliderImages = ref([])

const currentImages = computed(() => roomsList[activeIndex.value]?.images || [])

function handleOpenLightbox(index) {
  activeIndex.value = index
  sliderImages.value = roomsList[index].images
  sliderOpen.value = true
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="min-h-screen bg-base-100">
      <HeroSection
        title="Наші кімнати"
        subtitle="Комфортні та затишні кімнати для вашого відпочинку"
        background="/img/rooms-bg.jpg"
      />
      <div class="container mx-auto px-4 my-10">
        <RoomsGrid :rooms="roomsList" @open-lightbox="handleOpenLightbox" />
      </div>
    </div>

    <!-- ✅ Використовуємо кастомний слайдер -->
    <ImageSlider
      v-if="sliderOpen"
      :images="sliderImages"
      :startIndex="0"
      @close="sliderOpen = false"
    />

    <FormComp />
    <FooterComp />
  </div>
</template>
