<template>
  <section class="relative py-20 px-4 md:px-10 bg-white overflow-hidden">

    <!-- Фонове фото -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-30 -z-10"
      :style="{ backgroundImage: 'url(/img/form-background.jpg)' }"
    ></div>

    <!-- Заголовок -->
    <h2 class="text-4xl font-bold text-center text-neutral mb-12">
      Розпорядок дня ваших родичів
    </h2>

    <!-- Картки -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div
        v-for="(item, index) in schedule"
        :key="index"
        class="card bg-base-200 shadow-lg p-6 flex items-center space-x-4"
      >
        <!-- Іконка -->
        <div class="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <!-- Час і активність -->
        <div>
          <h3 class="text-xl font-semibold text-gray-800">{{ item.time }}</h3>
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
