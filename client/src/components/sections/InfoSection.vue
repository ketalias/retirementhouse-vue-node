<template>
    <section class="bg-base-100 py-8 px-4 sm:px-6 lg:px-12">
        <div class="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
            <header>
                <h2 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-base-content mb-3">
                    {{ t('home_page.info_section.main_title') }}
                </h2>
                <p class="text-base sm:text-lg md:text-xl text-base-content max-w-3xl mx-auto">
                    {{ t('home_page.info_section.main_subtitle') }}
                </p>
            </header>

            <div class="w-full">
                <img src="/img/hero-background.jpg" :alt="t('home_page.info_section.main_title')"
                    class="w-full max-w-5xl h-48 sm:h-64 md:h-80 mx-auto rounded-xl shadow-xl object-cover transition-transform duration-300 hover:scale-[1.02]" />
            </div>

            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">
                    {{ t('home_page.info_section.why_us_title') }}</h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content text-base sm:text-lg md:text-xl">
                    <li v-for="(item, index) in whyUsList" :key="index" class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span v-html="item"></span>
                    </li>
                </ul>
            </section>

            <section class="space-y-5 max-w-5xl w-full">
                <h3 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-secondary">
                    {{ t('home_page.info_section.when_relevant_title') }}
                </h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base-content text-base sm:text-lg md:text-xl">
                    <li v-for="(item, index) in whenRelevantList" :key="index" class="flex items-start space-x-2">
                        <span class="text-primary">•</span>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </section>

            <footer class="text-center space-y-3">
                <p class="text-base sm:text-lg text-base-content">
                    {{ t('home_page.info_section.cta_text') }}
                </p>
                <a :href="`tel:${t('home_page.info_section.cta_phone')}`"
                    class="btn btn-primary text-base sm:text-lg px-6 py-2 rounded-lg transition-transform duration-300 hover:scale-105">
                    {{ t('home_page.info_section.cta_phone') }}
                </a>
            </footer>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n({ useScope: 'global' })

const whyUsList = tm('home_page.info_section.why_us_list')
const whenRelevantList = tm('home_page.info_section.when_relevant_list')
</script>