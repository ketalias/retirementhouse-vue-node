<template>
  <div>
    <section class="py-10 min-h-screen bg-white">
      <div class="container mx-auto px-4">
        <h1 class="text-6xl font-bold mb-8 text-center">Наші кімнати</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(room, index) in rooms"
            :key="room.id"
            @click="openLightbox(index)"
            class="cursor-pointer"
          >
            <RoomCard
              :image="room.images[0]"
              :title="room.title"
              :description="room.description"
              :features="room.features"
            />
          </div>
        </div>
      </div>
    </section>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="rooms[activeIndex]?.images || []"
      :index="lightboxImageIndex"
      @hide="visible = false"
      @on-prev="prevImage"
      @on-next="nextImage"
    />

    <FooterComp />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import RoomCard from '@/components/RoomCard.vue'
import FooterComp from '@/components/FooterComp.vue'

const visible = ref(false)
const activeIndex = ref(0)
const lightboxImageIndex = ref(0)

function openLightbox(index) {
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
  if (lightboxImageIndex.value < rooms[activeIndex.value].images.length - 1) {
    lightboxImageIndex.value++
  }
}

const rooms = [
  {
    id: 1,
    title: 'Кімната №1',
    description: 'Світла кімната з видом на сад.',
    features: ['2 ліжка', 'Санвузол у номері', 'ТВ'],
    images: [
      '../../public/img/hero-background.jpg',
      '../../public/img/galleryitem1.jpg',
      '../../public/img/granny1.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Кімната №2',
    description: 'Комфортна кімната для однієї особи.',
    features: ['1 ліжко', 'Вікно на південь', 'Wi-Fi'],
    images: ['../../public/img/galleryitem1.jpg', '../../public/img/granny1.jpeg'],
  },
  {
    id: 3,
    title: 'Кімната №3',
    description: 'Простора кімната з індивідуальним дизайном.',
    features: ['3 ліжка', 'Окрема тераса'],
    images: [
      '../../public/img/hero-background.jpg',
      '../../public/img/galleryitem1.jpg',
      '../../public/img/granny1.jpeg',
    ],
  },
]
</script>
