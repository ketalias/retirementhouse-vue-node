<template>
  <div class="faq-container max-w-6xl mx-auto" data-aos="fade-up">
    <h2 class="text-2xl font-bold mb-6 text-center" data-aos="fade-up">Поширені запитання</h2>
    <ul class="space-y-4" data-aos="fade-up">
      <li v-for="(faq, index) in faqs" :key="index">
        <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
          <input
            type="checkbox"
            :id="`faq-${index + 1}`"
            class="peer"
          />
          <label
            :for="`faq-${index + 1}`"
            class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary"
          >
            {{ faq.question }}
          </label>
          <div
            class="collapse-content peer-checked:block"
            :aria-labelledby="`faq-${index + 1}`"
          >
            <p v-if="!faq.isHtml" v-html="faq.answer"></p>
            <p v-else>
              <span v-html="faq.answer"></span>
              <router-link
                v-if="faq.link"
                :to="faq.link"
                class="text-primary hover:underline"
              >
                {{ faq.linkText || 'Детальніше' }}
              </router-link>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
    validator(arr) {
      return arr.every(faq => 'question' in faq && 'answer' in faq)
    }
  }
})
</script>
