<script setup>
/* --- External --- */
import { ref } from 'vue'

/* --- Composables --- */
import { useContact } from '@/composables/useContact'
import { useHomeData } from '@/composables/useHomeData'

/* --- API --- */
import { sendCalculatorForm } from '@/api'

/* --- Components --- */
import HeroSection from '@/components/sections/HeroSection.vue'
import GuestsTestimonials from '@/components/sections/GuestsTestimonials.vue'
import GalleryMasonry from '@/components/sections/GalleryMasonry.vue'
import FormSection from '@/components/sections/FormSection.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import FloatingFormButton from '@/components/ui/FloatingFormButton.vue'
import PriceCalcForm from '@/components/forms/PriceCalcForm.vue'
import InfoSection from '@/components/sections/InfoSection.vue'
import CareFeaturesGrid from '@/components/grids/CareFeaturesGrid.vue'


/* --- Data --- */
const { cardsListHome } = useHomeData()
const { handleCall } = useContact()

/* --- State --- */
const isFormOpen = ref(false)

/* --- Methods --- */
const handleFormSubmit = (formData) => {
  sendCalculatorForm(formData)
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
    <div class="fixed left-6 bottom-40 flex flex-col gap-2 z-30">
      <FloatingFormButton @open="isFormOpen = true" type="calculator" label="Розрахуйте вартість" />
      <FloatingFormButton type="call" />
    </div>
    <PriceCalcForm mode="modal" :isOpen="isFormOpen" @close="isFormOpen = false" @submitted="handleFormSubmit" />

    <!-- Hero Section -->
    <HeroSection id="hero" title="Rest Hill Villa"
      subtitle="Тепла опіка серед природи і спокою, пансіонат для людей поважного віку"
      background="/img/hero-background.jpg">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
        <p class="text-lg text-gray-700">Пансіонат для людей похилого віку в мальовничому куточку України</p>
        <button @click="handleCalculatePrice" class="btn btn-primary">Розрахувати вартість</button>
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

    <!-- Care Features Grid -->
    <CareFeaturesGrid />

    <!-- Form Section -->
    <FormSection @formSubmitted="handleFormSubmit" />

    <!-- Guests Section -->
    <GuestsTestimonials />

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
