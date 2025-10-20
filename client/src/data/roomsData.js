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
      images: ['/img/rooms/room-one/image1.JPG', '/img/rooms/room-one/image2.JPG', '/img/rooms/room-one/image3.JPG']
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
      images: ['/img/rooms/room-two/image1.JPG', '/img/rooms/room-two/image2.JPG', '/img/rooms/room-two/image3.JPG', '/img/rooms/room-two/image4.JPG']
    },
    {
      id: 3,
      title: t('rooms_page.rooms.1.title', 'Кімната №3'),
      description: t('rooms_page.rooms.1.description', 'Комфортна кімната для однієї особи.'),
      features: [
        t('rooms_page.rooms.1.features.0', '1 ліжко'),
        t('rooms_page.rooms.1.features.1', 'Вікно на південь'),
        t('rooms_page.rooms.1.features.2', 'Wi-Fi')
      ],
      images: ['/img/rooms/room-three/image1.JPG', '/img/rooms/room-three/image2.JPG', '/img/rooms/room-three/image3.JPG']
    },]
}
