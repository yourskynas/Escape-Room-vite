import { QuestType } from '../types';

export const QuestsMocks: QuestType[] = [
  {
    id: '6cdc3daf-0fdf-4794-8fe3-5e4b506c29d2',
    title: 'Склеп',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/crypt.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/crypt.webp',
    level: 'hard',
    type: 'horror',
    peopleMinMax: [
      2,
      5
    ]
  },
  {
    id: 'd494bc54-f0ba-46c0-be65-64027fbb96f4',
    title: 'Маньяк',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/maniac.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/maniac.webp',
    level: 'medium',
    type: 'horror',
    peopleMinMax: [
      3,
      6
    ]
  },
  {
    id: 'cc9b1d8b-25b8-4e6a-851e-522a503b1842',
    title: 'Ритуал',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/ritual.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/ritual.webp',
    level: 'hard',
    type: 'mystic',
    peopleMinMax: [
      3,
      5
    ]
  },
  {
    id: '230485ab-be8a-4a57-9494-f2bbf1974274',
    title: 'Тайны старого особняка',
    previewImg: 'https://grading.design.htmlacademy.pro/static/quest/palace.jpg',
    previewImgWebp: 'https://grading.design.htmlacademy.pro/static/quest/palace.webp',
    level: 'easy',
    type: 'detective',
    peopleMinMax: [
      2,
      5
    ]
  }
];
