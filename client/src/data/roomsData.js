export function getRoomItems(t) {
  return [
    {
      id: 1,
      title: t('rooms_page.rooms.0.title', 'Кімната №1'),
      description: t('rooms_page.rooms.0.description', 'Світла кімната з видом на сад.'),
      features: [
        t('rooms_page.rooms.0.features.0', '2 ліжка'),
        t('rooms_page.rooms.0.features.1', 'Санвузол у кімнаті'),
        t('rooms_page.rooms.0.features.2', 'ТВ')
      ],
      images: ['/img/rooms/room-one/image1.JPG', '/img/rooms/room-one/image2.JPG', '/img/rooms/room-one/image3.JPG']
    },
    {
      id: 2,
      title: t('rooms_page.rooms.1.title', 'Кімната №2'),
      description: t('rooms_page.rooms.1.description', 'Комфортна кімната для двох осіб.'),
      features: [
        t('rooms_page.rooms.1.features.0', '2 ліжка'),
        t('rooms_page.rooms.1.features.1', 'Санвузол у кімнаті'),
        t('rooms_page.rooms.1.features.2', 'Wi-Fi')
      ],
      images: ['/img/rooms/room-two/image1.JPG', '/img/rooms/room-two/image2.JPG', '/img/rooms/room-two/image3.JPG', '/img/rooms/room-two/image4.JPG']
    },
    {
      id: 3,
      title: t('rooms_page.rooms.2.title', 'Кімната №3'),
      description: t('rooms_page.rooms.2.description', 'Простора кімната з індивідуальним дизайном.'),
      features: [
        t('rooms_page.rooms.2.features.0', '3 ліжка'),
        t('rooms_page.rooms.2.features.1', 'Окрема тераса'),
        t('rooms_page.rooms.2.features.2', 'Функціональні ліжка')
      ],
      images: ['/img/rooms/room-three/image1.jpg', '/img/rooms/room-three/image2.jpg', '/img/rooms/room-three/image3.jpg']
    },]
}
