<template>
  <section class="py-16 px-4 md:px-10 bg-white text-center">
    <h2 class="text-3xl font-bold mb-12 text-primary">
      Будьте спокійні за своїх родичів
    </h2>
    <div class="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="card bg-base-100 shadow-md p-6 items-center"
      >
        <div class="avatar mb-4">
          <div class="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-5 overflow-hidden">
            <img :src="item.image" :alt="item.title" class="object-cover w-full h-full" />
          </div>
        </div>
        <h3 class="text-xl font-semibold text-primary">{{ item.title }}</h3>
        <p class="text-md font-semibold text-black mt-1">{{ item.caption }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    image: '/img/granny1.jpeg',
    title: 'Медичний догляд',
    caption: '24/7 супровід',
  },
  {
    image: '/img/granny2.jpg',
    title: 'Затишок і турбота',
    caption: 'домашня атмосфера',
  },
  {
    image: '/img/granny3.jpg',
    title: 'Живе спілкування',
    caption: 'нові друзі',
  },
  {
    image: '/img/granny1.jpeg',
    title: 'Медичний догляд',
    caption: '24/7 супровід',
  },
  {
    image: '/img/granny2.jpg',
    title: 'Затишок і турбота',
    caption: 'домашня атмосфера',
  },
  {
    image: '/img/granny3.jpg',
    title: 'Живе спілкування',
    caption: 'нові друзі',
  },
  {
    image: '/img/granny1.jpeg',
    title: 'Медичний догляд',
    caption: '24/7 супровід',
  },
  {
    image: '/img/granny2.jpg',
    title: 'Затишок і турбота',
    caption: 'домашня атмосфера',
  },
  {
    image: '/img/granny3.jpg',
    title: 'Живе спілкування',
    caption: 'нові друзі',
  },
]
</script>
