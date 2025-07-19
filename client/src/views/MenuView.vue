<template>
    <div class="min-h-screen bg-white text-base-content">
        <div class="relative hero h-[40vh] bg-[url('/img/oldmen-eat-bg.jpg')] bg-cover bg-center" data-aos="fade-in">
            <div class="absolute inset-0 bg-black/60"></div>
            <div class="relative z-10 text-center px-4">
                <h1 class="mb-5 text-5xl md:text-8xl font-bold text-white" data-aos="fade-up">
                    Меню та Розпорядок Дня
                </h1>
                <p class="mb-5 text-2xl text-white" data-aos="fade-up" data-aos-delay="200">
                    З турботою про здоров’я та комфорт наших мешканців
                </p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 space-y-20">

            <section
                class="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center"
                data-aos="fade-up">
                <img class="w-full md:w-1/2 rounded-lg shadow"
                    src="https://t4.ftcdn.net/jpg/01/43/88/31/360_F_143883132_bn9n14k3aX10bq5HN18IYHPbx9YyiSEA.jpg"
                    alt="Харчування літніх людей" data-aos="zoom-in" />
                <div class="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary">Наш підхід до харчування</h2>
                    <p class="text-lg text-gray-700 mt-4 leading-relaxed">
                        У нашому пансіонаті харчування — це не просто їжа. Це турбота, індивідуальний підхід і любов.
                        Щоденне меню формується дієтологами з урахуванням вікових потреб, стану здоров’я та побажань
                        кожного мешканця. У нас використовуються лише свіжі, натуральні продукти, без надлишку цукру,
                        солі або шкідливих добавок.
                    </p>
                </div>
            </section>

            <section class="bg-white p-6 md:p-10" data-aos="fade-up">
                <h2 class="text-5xl font-bold text-center text-secondary mb-6" data-aos="fade-up" data-aos-delay="100">
                    Приклад Денного Меню</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-aos="zoom-in" data-aos-delay="200">
                        <MenuCard title="Сніданок"
                            :items="['Вівсяна каша на молоці з фруктами', 'Сирники з домашнім йогуртом', 'Чай з ромашки або зелений чай']"
                            image="https://eco-buffet.com/wp-content/uploads/2024/09/samye-poleznye-kashy.jpg" />
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400">
                        <MenuCard title="Обід"
                            :items="['Овочевий суп на курячому бульйоні', 'Куряче філе з гречкою', 'Салат з буряка', 'Компот із сухофруктів']"
                            image="https://e2go.com.ua/load/120/food/boul-15-grechka_256pic_26480__85547.jpg" />
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="600">
                        <MenuCard title="Вечеря"
                            :items="['Запечена риба з тушкованими овочами', 'Рисова каша на воді', 'Трав’яний чай з медом']"
                            image="https://znaj.ua/images/2019/03/01/t9FpoKKncZRl2aPKEoQi6UrUi7Waf7sXS6Vr5lOl.jpeg" />
                    </div>
                </div>
            </section>

            <section class="bg-white rounded-xl shadow-md p-6 md:p-10 max-w-4xl mx-auto" data-aos="fade-up">
                <h2 class="text-5xl font-bold text-primary mb-4 text-center">Розпорядок дня</h2>
                <ul class="list-disc pl-6 text-lg text-gray-700 space-y-2 mt-4 ml-4" data-aos="fade-up"
                    data-aos-delay="200">
                    <li><strong>07:30</strong> — Підйом та ранкові процедури</li>
                    <li><strong>08:00</strong> — Сніданок</li>
                    <li><strong>09:00</strong> — Ранкова зарядка або прогулянка</li>
                    <li><strong>10:00</strong> — Хобі, читання або спілкування</li>
                    <li><strong>12:00</strong> — Обід</li>
                    <li><strong>13:00</strong> — Тиха година (відпочинок)</li>
                    <li><strong>15:00</strong> — Настільні ігри, розвиток</li>
                    <li><strong>17:00</strong> — Вечеря</li>
                    <li><strong>18:00</strong> — Телеперегляд або прогулянка</li>
                    <li><strong>20:00</strong> — Підготовка до сну</li>
                </ul>
            </section>
        </div>

        <div data-aos="fade-up">
            <FormComp />
        </div>
        <FooterComp />
    </div>
</template>

<script setup>
import MenuCard from '@/components/MenuCard.vue';
import FormComp from '@/components/FormComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
    })
})
</script>

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
