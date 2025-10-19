<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue';
import DailyMenuSection from '@/components/sections/DailyMenuSection.vue';
import DailySchedule from '@/components/grids/DailySchedule.vue';
import ImageTextCard from '@/components/cards/ImageTextCard.vue';
import FormComp from '@/components/forms/FormComp.vue';
import FooterComp from '@/components/layout/FooterComp.vue';
import { getDailyMenuItems, getDailySchedule } from '@/data/menuData.js'

const { t } = useI18n()

const dailyMenuItems = computed(() => getDailyMenuItems(t))
const dailySchedule = computed(()=>getDailySchedule(t))
</script>
<template>
    <div class="min-h-screen bg-base-100 text-base-content">
        <HeroSection titleKey="menu_page.hero.title" subtitleKey="menu_page.hero.subtitle" background="/img/oldmen-eat-bg.jpg" />
        <div class="container mx-auto px-4 py-12 space-y-20">
            <ImageTextCard :title="t('menu_page.nutrition_approach.title')" :text="t('menu_page.nutrition_approach.text')"
                image="https://t4.ftcdn.net/jpg/01/43/88/31/360_F_143883132_bn9n14k3aX10bq5HN18IYHPbx9YyiSEA.jpg"
                :alt="t('menu_page.nutrition_approach.alt')" />
            <DailyMenuSection :title="t('menu_page.daily_menu_example.title')" :menuItems="dailyMenuItems" />
            <DailySchedule :title="t('menu_page.daily_schedule.title')" :schedule="dailySchedule" />
        </div>
        <FormComp data-aos="fade-up" />
        <FooterComp />
    </div>
</template>
<style scoped>
li {
    list-style-type: disc;
    font-size: 1.3rem;
    line-height: 1.75;
    color: #374151;
    font-weight: 500;
    transition: color 0.3s ease;
    cursor: pointer;
}
</style>
