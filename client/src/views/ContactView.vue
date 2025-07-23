<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FormComp from '../components/FormComp.vue'
import FooterComp from '../components/FooterComp.vue'
import LocationMap from '@/components/LocationMap.vue';
import InfoCardsGrid from '@/components/InfoCardsGrid.vue';
import { cardsList, cardsList2 } from '@/data/cardsData.js'
import FaqAccordion from '@/components/FaqAccordion.vue';
import { faqsContactItems } from '@/data/faqsData';
import { ref } from 'vue'
</script>
<template>
  <div class="min-h-screen">
    <HeroSection title="Контакти" subtitle="Зв'яжіться з нами для отримання додаткової інформації"
      background="/img/contact-bg.jpg" />
    <div class="max-w-6xl mx-auto py-16 px-4 space-y-12 text-lg">
      <InfoCardsGrid :cards="cardsList2" />
      <LocationMap />
      <InfoCardsGrid :cards="cardsList" />
      <FormComp />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
      </div>
      <FaqAccordion :faqs="faqsContactItems" />
    </div>
    <FooterComp />
  </div>
</template>
