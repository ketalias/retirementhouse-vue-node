<template>
    <section aria-label="Відгуки гостей" class="py-16 px-4 bg-white" data-aos="fade-up">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-12" data-aos="fade-up" data-aos-delay="100">
                Що кажуть наші гості
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <blockquote
                    class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
                    data-aos="fade-up" data-aos-delay="100">
                    <img src="/img/granny1.jpeg" class="rounded-xl h-[200px] w-full object-cover"
                        alt="Фото користувача Оксана К." />
                    <p class="text-gray-800 text-lg leading-relaxed">
                        “Чудове місце для відпочинку! Комфортні номери та неймовірна природа. Обов’язково
                        повернуся!”
                    </p>
                    <footer class="text-sm text-gray-600 font-semibold">— Оксана К.</footer>
                </blockquote>
                <blockquote
                    class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
                    data-aos="fade-up" data-aos-delay="200">
                    <img src="/img/granny2.jpg" class="rounded-xl h-[200px] w-full object-cover"
                        alt="Фото користувачки Марія П." />
                    <p class="text-gray-800 text-lg leading-relaxed">
                        “Неймовірне місце! Дуже сподобалась атмосфера спокою та затишку. Ідеально для
                        відновлення сил.”
                    </p>
                    <footer class="text-sm text-gray-600 font-semibold">— Марія П.</footer>
                </blockquote>
                <blockquote
                    class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
                    data-aos="fade-up" data-aos-delay="300">
                    <img src="/img/granny3.jpg" class="rounded-xl h-[200px] w-full object-cover"
                        alt="Фото користувачки Галина С." />
                    <p class="text-gray-800 text-lg leading-relaxed">
                        “Персонал дуже привітний, а навколишня природа — просто казка. Рекомендую всім, хто
                        хоче відпочити душею.”
                    </p>
                    <footer class="text-sm text-gray-600 font-semibold">— Галина С.</footer>
                </blockquote>
            </div>
        </div>
    </section>
</template>
<style scoped>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-15px);
}
</style>