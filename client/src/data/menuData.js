export function getDailyMenuItems(t) {
  return [
    {
      title: t('menu_page.daily_menu.breakfast.title', 'Сніданок'),
      items: [
        t('menu_page.daily_menu.breakfast.items.0', 'Вівсяна каша на молоці з фруктами'),
        t('menu_page.daily_menu.breakfast.items.1', 'Сирники з домашнім йогуртом'),
        t('menu_page.daily_menu.breakfast.items.2', 'Чай з ромашки або зелений чай')
      ],
      image: '/img/menu/breakfast.jpg'
    },
    {
      title: t('menu_page.daily_menu.lunch.title', 'Обід'),
      items: [
        t('menu_page.daily_menu.lunch.items.0', 'Овочевий суп на курячому бульйоні'),
        t('menu_page.daily_menu.lunch.items.1', 'Куряче філе з гречкою'),
        t('menu_page.daily_menu.lunch.items.2', 'Салат з буряка'),
        t('menu_page.daily_menu.lunch.items.3', 'Компот із сухофруктів')
      ],
      image: '/img/menu/lunch.jpg'
    },
    {
      title: t('menu_page.daily_menu.dinner.title', 'Вечеря'),
      items: [
        t('menu_page.daily_menu.dinner.items.0', 'Запечена риба з тушкованими овочами'),
        t('menu_page.daily_menu.dinner.items.1', 'Рисова каша на воді'),
        t('menu_page.daily_menu.dinner.items.2', "Трав'яний чай з медом")
      ],
      image: '/img/menu/dinner.jpg'
    }
  ]
}

export function getDailySchedule(t) {
  return [
    { time: '07:30', activity: t('menu_page.daily_schedule.0', 'Підйом та ранкові процедури') },
    { time: '08:00', activity: t('menu_page.daily_schedule.1', 'Сніданок') },
    { time: '09:00', activity: t('menu_page.daily_schedule.2', 'Ранкова зарядка або прогулянка') },
    { time: '10:00', activity: t('menu_page.daily_schedule.3', 'Хобі, читання або спілкування') },
    { time: '12:00', activity: t('menu_page.daily_schedule.4', 'Обід') },
    { time: '13:00', activity: t('menu_page.daily_schedule.5', 'Тиха година (відпочинок)') },
    { time: '15:00', activity: t('menu_page.daily_schedule.6', 'Настільні ігри, розвиток') },
    { time: '17:00', activity: t('menu_page.daily_schedule.7', 'Вечеря') },
    { time: '18:00', activity: t('menu_page.daily_schedule.8', 'Телеперегляд або прогулянка') },
    { time: '20:00', activity: t('menu_page.daily_schedule.9', 'Підготовка до сну') }
  ]
}
