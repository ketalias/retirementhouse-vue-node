import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  debug: false,
  fallbackLng: 'ua',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        hero: {
          title: 'Panska Vtikha Nursing Home',
          subtitle: 'A Place of Care and Comfort',
          description:
            'Panska Vtikha is a nursing home providing warmth, dignity, and professional care in a peaceful environment.',
          cta1: 'Calculate Cost',
          cta2: 'Call Us',
        },
        advantages: {
          title: 'Our Advantages',
          items: [
            {
              title: 'Comfortable Rooms',
              desc: 'Cozy rooms with all necessary amenities for residents.',
            },
            {
              title: 'Nature Nearby',
              desc: 'Fresh air, forests, and lakes create a healing atmosphere.',
            },
            {
              title: 'Ukrainian Hospitality',
              desc: 'Warm welcome and attentive care for your loved ones.',
            },
          ],
        },
        reviews: {
          title: 'What Our Residents Say',
          quotes: [
            {
              name: 'Oksana K.',
              text: '“A wonderful place to live! Comfortable rooms and beautiful nature. I feel at home.”',
              imgAlt: 'Photo of Oksana K.',
            },
            {
              name: 'Maria P.',
              text: '“Amazing atmosphere of calm and care. Perfect for restoring health and spirit.”',
              imgAlt: 'Photo of Maria P.',
            },
            {
              name: 'Halyna S.',
              text: '“Friendly staff and a peaceful environment. Highly recommended.”',
              imgAlt: 'Photo of Halyna S.',
            },
          ],
        },
        gallery: {
          title: 'Gallery',
        },
      },
    },
    ua: {
      translation: {
        hero: {
          title: 'Панська Втіха',
          subtitle: 'Місце турботи та комфорту',
          description:
            '“Панська Втіха” — це будинок для літніх людей, де панують тепло, гідність і професійний догляд у спокійному оточенні.',
          cta1: 'Розрахувати вартість',
          cta2: 'Зателефонувати',
        },
        advantages: {
          title: 'Наші переваги',
          items: [
            {
              title: 'Комфортні кімнати',
              desc: 'Затишні кімнати з усіма необхідними зручностями для мешканців.',
            },
            {
              title: 'Природа поруч',
              desc: 'Свіже повітря, ліси та водойми створюють лікувальну атмосферу.',
            },
            {
              title: 'Українська гостинність',
              desc: 'Теплий прийом та уважний догляд для ваших близьких.',
            },
          ],
        },
        reviews: {
          title: 'Що кажуть наші мешканці',
          quotes: [
            {
              name: 'Оксана К.',
              text: '“Чудове місце для життя! Комфортні кімнати та красива природа. Відчуваю себе як вдома.”',
              imgAlt: 'Фото Оксани К.',
            },
            {
              name: 'Марія П.',
              text: '“Неймовірна атмосфера спокою та турботи. Ідеально для відновлення здоров’я та духу.”',
              imgAlt: 'Фото Марії П.',
            },
            {
              name: 'Галина С.',
              text: '“Привітний персонал і спокійне оточення. Рекомендую всім.”',
              imgAlt: 'Фото Галини С.',
            },
          ],
        },
        gallery: {
          title: 'Галерея',
        },
      },
    },
  },
})


export { i18next }

export default function installI18n(app) {
  app.use(I18NextVue, { i18next })
}
