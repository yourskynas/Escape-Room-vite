import { BookingAllDatesTypes } from './types';

const AppRoute = {
  Main: '/',
  Quest: '/quest/:id',
  Booking: '/quest/:id/booking',
  MyQuests: '/my-quests',
  Login: '/login',
  Contacts: '/contacts',
} as const;

const QuestLevel = {
  any: 'Любой',
  easy: 'Простой',
  medium: 'Средний',
  hard: 'Сложный'
} as const;

const QuestGenre = {
  all: 'Все квесты',
  adventures: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi'
} as const;

const BookingAllDates: BookingAllDatesTypes[] = [
  {
    date: 'today',
    times: {
      today9h45m: '11:00',
      today15h00m: '15:00',
      today17h30m: '17:30',
      today19h30m: '19:30',
      today21h30m: '21:30'
    },
  },
  {
    date: 'tomorrow',
    times: {
      tomorrow11h00m: '11:00',
      tomorrow15h00m: '15:00',
      tomorrow17h30m: '17:30',
      tomorrow19h45m: '19:45',
      tomorrow21h30m: '21:30'
    }}
];

const Socials = {
  skype: 'Skype',
  vk: 'ВКонтакте',
} as const;

const NameSpace = {
  User: 'USER',
  Data: 'DATA',
  Main: 'MAIN',
} as const;

const APIRoute = {
  Quests: '/quest',
} as const;

export {
  AppRoute,
  QuestLevel,
  QuestGenre,
  BookingAllDates,
  Socials,
  NameSpace,
  APIRoute
};
