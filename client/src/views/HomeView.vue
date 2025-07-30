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
    <HeroSection id="hero" title="Пансіонат «Панська Втіха»" subtitle="Тепла опіка серед природи"
      background="/img/hero-background.jpg">
      <p class="hidden md:block text-base mb-6 md:w-[65vw] lg:w-[50vw] text-white" data-aos="fade-up"
        data-aos-delay="300">
        «Панська Втіха» — це сучасний дім для людей поважного віку, де професійна
        цілодобова опіка поєднується з домашнім теплом і мальовничими краєвидами.
        Комфортні кімнати, збалансоване харчування, індивідуальний медичний догляд
        та цікаве дозвілля допоможуть вашим близьким почуватися в безпеці, серед
        друзів і турботи.
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
