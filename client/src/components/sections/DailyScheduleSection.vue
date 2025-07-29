<template>
    <section class="relative py-16 px-4 md:px-8 lg:px-12 bg-gray-50 overflow-hidden flex flex-col items-center">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-20 -z-10"
            :style="{ backgroundImage: 'url(/img/form-background.jpg)' }"></div>

        <!-- Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 max-w-3xl">
            Розпорядок дня ваших родичів
        </h2>

        <!-- Cards -->
        <div class="grid md:grid-cols-2 gap-6 max-w-6xl w-full">
            <div v-for="(item, index) in schedule" :key="index"
                class="card bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-4 w-full max-w-md mx-auto transition-transform hover:scale-105 duration-300 ease-in-out">
                <!-- Icon -->
                <div class="text-primary-500 flex justify-center items-center w-14 h-14 bg-gray-100 rounded-full shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <!-- Time and Activity -->
                <div class="flex flex-col items-center text-center text-gray-800">
                    <h3 class="text-lg font-semibold">{{ item.time }}</h3>
                    <p class="text-base text-primary font-medium mt-1">{{ item.activity }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const schedule = [
    { time: '07:30', activity: 'Підйом і гігієна' },
    { time: '08:00', activity: 'Сніданок' },
    { time: '09:00', activity: 'Прогулянка на свіжому повітрі' },
    { time: '10:30', activity: 'Реабілітація або творчість' },
    { time: '13:00', activity: 'Обід' },
    { time: '14:00', activity: 'Відпочинок у кімнаті' },
    { time: '16:00', activity: 'Ігри, бесіди, чай' },
    { time: '18:00', activity: 'Вечеря' },
    { time: '20:00', activity: 'Підготовка до сну' },
]
</script>