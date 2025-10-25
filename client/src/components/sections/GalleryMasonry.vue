<script setup>
import { imagesHomeList } from '@/data/imagesData'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <section class="py-10 bg-base-100">
        <h2 class="text-3xl font-bold text-center text-primary mb-8">
            {{t('home_page.gallery.title')}}
        </h2>
        <div class="container mx-auto px-4">
            <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                <div v-for="(item, index) in imagesHomeList" :key="index"
                    class="break-inside-avoid overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
                    :data-aos="'fade-up'" :data-aos-delay="100 + (index % 4) * 100">
                    <img :src="item.src" :style="{ height: item.height + 'px' }" class="w-full object-cover rounded-xl"
                        loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>
