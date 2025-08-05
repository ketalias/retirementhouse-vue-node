<script setup>
import HeroSection from '@/components/sections/HeroSection.vue';
import DailyMenuSection from '@/components/sections/DailyMenuSection.vue';
import DailySchedule from '@/components/cards/DailySchedule.vue';
import ImageTextCard from '@/components/cards/ImageTextCard.vue';
import FormComp from '@/components/forms/FormComp.vue';
import FooterComp from '@/components/layout/FooterComp.vue';
import { dailyMenuItems, dailySchedule } from '@/data/menuData.js'
</script>
<template>
    <div class="min-h-screen bg-base-100 text-base-content">
        <HeroSection title="Меню та Розпорядок Дня" subtitle="З турботою про здоров’я та комфорт наших мешканців"
            background="/img/oldmen-eat-bg.jpg" />
        <div class="container mx-auto px-4 py-12 space-y-20">
            <ImageTextCard title="Наш підхід до харчування" text="У нашому пансіонаті харчування — це не просто їжа. Це турбота, індивідуальний підхід і любов.
        Щоденне меню формується дієтологами з урахуванням вікових потреб, стану здоров’я та побажань
        кожного мешканця. У нас використовуються лише свіжі, натуральні продукти, без надлишку цукру,
        солі або шкідливих добавок."
                image="https://t4.ftcdn.net/jpg/01/43/88/31/360_F_143883132_bn9n14k3aX10bq5HN18IYHPbx9YyiSEA.jpg"
                alt="Харчування літніх людей" />
            <DailyMenuSection title="Приклад Денного Меню" :menuItems="dailyMenuItems" />
            <DailySchedule :schedule="dailySchedule" />
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
