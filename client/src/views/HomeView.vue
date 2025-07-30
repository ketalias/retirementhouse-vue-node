<script setup>
/* --- External --- */
import { ref } from 'vue'

/* --- Composables --- */
import { useContact } from '@/composables/useContact'
import { useHomeData } from '@/composables/useHomeData'

/* --- API --- */
import { sendUserData } from '@/api'

/* --- Components --- */
import HeroSection from '@/components/sections/HeroSection.vue'
import InfoCardsGrid from '@/components/grids/InfoCardsGrid.vue'
import GuestsTestimonials from '@/components/sections/GuestsTestimonials.vue'
import GalleryMasonry from '@/components/sections/GalleryMasonry.vue'
import FormSection from '@/components/sections/FormSection.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import FloatingFormButton from '@/components/ui/FloatingFormButton.vue'
import PriceCalcForm from '@/components/forms/PriceCalcForm.vue'
import InfoSection from '@/components/sections/InfoSection.vue'
import CareFeaturesGrid from '@/components/grids/CareFeaturesGrid.vue'
import DailyScheduleSection from '@/components/sections/DailyScheduleSection.vue'
import FormComp from '@/components/forms/FormComp.vue'


/* --- Data --- */
const { cardsListHome } = useHomeData()
const { handleCall } = useContact()

/* --- State --- */
const isFormOpen = ref(false)

/* --- Methods --- */
const handleFormSubmit = (formData) => {
  sendUserData(formData)
    .then(() => {
      alert('Дані успішно надіслані!')
      isFormOpen.value = false
    })
    .catch((error) => {
      console.error('Помилка при надсиланні даних:', error)
      alert('Сталася помилка. Спробуйте ще раз.')
    })
}

function handleCalculatePrice() {
  const element = document.querySelector('#form-block')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main>
    <FloatingFormButton @open="isFormOpen = true" />
    <PriceCalcForm mode="modal" :isOpen="isFormOpen" @close="isFormOpen = false" @submitted="handleFormSubmit" />

    <!-- Hero Section -->
    <HeroSection id="hero" title="Пансіонат Панська Втіха" subtitle="Відпочинок у серці природи"
      background="/img/hero-background.jpg">
      <p class="hidden md:block text-base mb-6 md:w-[65vw] lg:w-[50vw] text-white" data-aos="fade-up"
        data-aos-delay="300">
        Пансіонат "Панська Втіха" — це ідеальне місце для відпочинку, де поєднуються комфорт,
        природа та українська гостинність. Розташований у мальовничому куточку, оточеному зеленими
        лісами та кришталево чистими водоймами, наш пансіонат створений для тих, хто прагне втекти
        від міської метушні та насолодитися спокоєм.
      </p>

      <div class="buttons flex flex-col md:flex-row gap-2 w-full md:w-auto" data-aos="fade-up" data-aos-delay="400">
        <button @click="handleCalculatePrice" class="btn btn-primary w-full md:w-auto">
          Розрахувати вартість
        </button>
        <button @click="handleCall" class="btn btn-secondary w-full md:w-auto" type="button"
          title="Натисніть, щоб зателефонувати або скопіювати номер">
          Зателефонувати
        </button>
      </div>
    </HeroSection>

    <!-- Advantages Section -->
    <div aria-label="Переваги" class="py-19 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <InfoCardsGrid :cards="cardsListHome" />
    </div>

    <!-- Guests Section -->
    <GuestsTestimonials />

    <!-- Form Section -->
    <FormSection @formSubmitted="handleFormSubmit" />

    <!-- Care Features Grid -->
    <CareFeaturesGrid />

    <!-- Daily Schedule Section -->
    <DailyScheduleSection />

    <!-- Info Section -->
    <InfoSection />

    <!-- Gallery Section -->
    <GalleryMasonry />

    <!-- Footer -->
    <FooterComp />
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
