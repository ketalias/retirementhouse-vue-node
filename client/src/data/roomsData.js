export function getRoomItems(t) {
  return [
    {
      id: 1,
      title: t('rooms_page.rooms.0.title', 'Кімната №1'),
      description: t('rooms_page.rooms.0.description', 'Світла кімната з видом на сад.'),
      features: [
        t('rooms_page.rooms.0.features.0', '2 ліжка'),
        t('rooms_page.rooms.0.features.1', 'Санвузол у номері'),
        t('rooms_page.rooms.0.features.2', 'ТВ')
      ],
      images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg']
    },
    {
      id: 2,
      title: t('rooms_page.rooms.1.title', 'Кімната №2'),
      description: t('rooms_page.rooms.1.description', 'Комфортна кімната для однієї особи.'),
      features: [
        t('rooms_page.rooms.1.features.0', '1 ліжко'),
        t('rooms_page.rooms.1.features.1', 'Вікно на південь'),
        t('rooms_page.rooms.1.features.2', 'Wi-Fi')
      ],
      images: ['/img/galleryitem1.jpg', '/img/granny1.jpeg']
    },
    {
      id: 3,
      title: t('rooms_page.rooms.2.title', 'Кімната №3'),
      description: t('rooms_page.rooms.2.description', 'Простора кімната з індивідуальним дизайном.'),
      features: [
        t('rooms_page.rooms.2.features.0', '3 ліжка'),
        t('rooms_page.rooms.2.features.1', 'Окрема тераса')
      ],
      images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg']
    },
    {
      id: 4,
      title: t('rooms_page.rooms.3.title', 'Кімната №4'),
      description: t('rooms_page.rooms.3.description', 'Затишна кімната з видом на внутрішній дворик.'),
      features: [
        t('rooms_page.rooms.3.features.0', '2 ліжка'),
        t('rooms_page.rooms.3.features.1', 'Кондиціонер'),
        t('rooms_page.rooms.3.features.2', 'Телевізор')
      ],
      images: ['/img/galleryitem1.jpg', '/img/granny2.jpg']
    },
    {
      id: 5,
      title: t('rooms_page.rooms.4.title', 'Кімната №5'),
      description: t('rooms_page.rooms.4.description', 'Одномісний номер зі зручностями.'),
      features: [
        t('rooms_page.rooms.4.features.0', '1 ліжко'),
        t('rooms_page.rooms.4.features.1', 'Wi-Fi')
      ],
      images: ['/img/hero-background.jpg', '/img/granny3.jpg']
    },
    {
      id: 6,
      title: t('rooms_page.rooms.5.title', 'Кімната №6'),
      description: t('rooms_page.rooms.5.description', 'Просторий сімейний номер.'),
      features: [
        t('rooms_page.rooms.5.features.0', '4 ліжка'),
        t('rooms_page.rooms.5.features.1', 'Окрема тераса')
      ],
      images: ['/img/galleryitem1.jpg', '/img/granny1.jpeg']
    }
  ]
}