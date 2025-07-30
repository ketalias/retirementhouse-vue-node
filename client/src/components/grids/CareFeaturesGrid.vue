<template>
  <section class="py-16 px-4 md:px-10 bg-white text-center">
    <h2 class="text-4xl font-bold mb-12 text-ДФСЛ">
      Будьте спокійні за своїх родичів
    </h2>
    <div class="grid gap-8 lg:grid-cols-4 md:grid-cols-2 max-w-8xl mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="card bg-base-100 shadow-lg overflow-hidden flex flex-col md:flex-row min-h-[280px]"
      >
        <div class="w-full md:w-1/2 h-48 md:h-auto">
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div
          class="flex-1 flex flex-col justify-center p-6 text-center md:text-left"
        >
          <h3 class="text-2xl font-semibold text-primary mb-2">
            {{ item.title }}
          </h3>
          <p class="text-md font-medium text-gray-700">
            {{ item.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    image: '/img/cards/blood-card.jpg',
    title: 'Медичний догляд',
    caption: '24/7 супровід',
  },
  {
    image: '/img/cards/wheel-card.png',
    title: 'Затишок і турбота',
    caption: 'домашня атмосфера',
  },
  {
    image: '/img/cards/friends-card.jpg',
    title: 'Живе спілкування',
    caption: 'нові друзі',
  },
  {
    image: '/img/cards/love-card.jpg',
    title: 'Нові враження',
    caption: 'святкування та заходи',
  },
]
</script>
