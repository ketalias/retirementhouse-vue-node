<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <footer class="bg-gray-900 text-gray-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <div class="md:w-1/3">
          <h2 class="text-2xl font-bold mb-4">{{ t('footer.title') }}</h2>
          <p class="text-gray-400">
            {{ t('footer.description') }}
          </p>
        </div>

        <div class="md:w-1/3">
          <h3 class="text-xl font-semibold mb-4">{{ t('footer.navigation_title') }}</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-primary transition">{{ t('footer.nav_links.home') }}</router-link>
            </li>
            <li><router-link to="/about" class="hover:text-primary transition">{{ t('footer.nav_links.about')
                }}</router-link></li>
            <li><router-link to="/rooms" class="hover:text-primary transition">{{ t('footer.nav_links.rooms')
                }}</router-link></li>
            <li><router-link to="/contact" class="hover:text-primary transition">{{ t('footer.nav_links.contact')
                }}</router-link></li>
            <li><router-link to="/menu" class="hover:text-primary transition">{{ t('footer.nav_links.menu')
                }}</router-link></li>
          </ul>
        </div>

        <div class="md:w-1/3">
          <h3 class="text-xl font-semibold mb-4">{{ t('footer.contacts_title') }}</h3>
          <p class="mb-2"><strong>{{ t('footer.address_label') }}</strong> {{ t('footer.address_value') }}</p>
          <p class="mb-2">
            <strong>{{ t('footer.phone_label') }}</strong>
            <a href="tel:+380501234567" class="hover:text-primary transition"> +38(095) 243 53 58</a>
          </p>
          <p class="mb-4">
            <strong>{{ t('footer.email_label') }}</strong>
            <a href="mailto:info@panska-vtiha.ua" class="hover:text-primary transition"> info@panska-vtiha.ua</a>
          </p>
          <div class="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" class="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  d="M22 12a10 10 0 1 0-11.5 9.87v-6.98h-2.7v-2.9h2.7v-2.2c0-2.68 1.6-4.16 4.05-4.16 1.17 0 2.4.21 2.4.21v2.6h-1.33c-1.31 0-1.72.82-1.72 1.67v2h2.94l-.47 2.9h-2.47v6.98A10 10 0 0 0 22 12" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6"
                viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-7.998-.12 4 4 0 0 1 7.998.12z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" class="hover:text-primary transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.48 9.03 9.03 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.69 3.9 12.82 12.82 0 0 1-9.3-4.71 4.48 4.48 0 0 0 1.4 6.04 4.49 4.49 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.03.08 4.53 4.53 0 0 0 4.21 3.14 9.05 9.05 0 0 1-5.6 1.94 9.19 9.19 0 0 1-1.08-.06 12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.39-.02-.58A9.22 9.22 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        {{ t('footer.copyright') }}
      </div>
    </div>
  </footer>
</template>