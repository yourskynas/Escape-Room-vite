const AppRoute = {
  Main: '/',
  Quest: '/quest',
  Booking: '/booking',
  MyQuests: '/my-quests',
  Login: '/login',
  Contacts: '/contacts',
} as const;

const QuestLevel = {
  any: 'Любой',
  easy: 'Лёгкий',
  middle: 'Средний',
  hard: 'Сложный'
} as const;

export {
  AppRoute,
  QuestLevel
};
