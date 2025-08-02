<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import FormComp from '../components/forms/FormComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
import LocationMap from '@/components/layout/LocationMap.vue';
import InfoCardsGrid from '@/components/grids/InfoCardsGrid.vue';
import { cardsListInfo } from '@/data/cardsData.js'
import FaqAccordion from '@/components/sections/FaqAccordion.vue';
import { faqsContactItems } from '@/data/faqsData';
</script>
<template>
  <div class="min-h-screen bg-base-100">
    <HeroSection title="Контакти" subtitle="Зв'яжіться з нами для отримання додаткової інформації"
      background="/img/contact-bg.jpg" />
    <div class="max-w-6xl mx-auto py-16 px-4 space-y-12 text-lg">
      <InfoCardsGrid :cards="cardsListInfo" />
      <LocationMap />
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
        <img src="/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="/img/hero-background.jpg" class="rounded-xl shadow" />
      </div>
      <FaqAccordion :faqs="faqsContactItems" />
      <FormComp />

    </div>
    <FooterComp />
  </div>
</template>
