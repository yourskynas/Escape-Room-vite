import { QuestGenre, QuestLevel } from './constants';

type Level = keyof typeof QuestLevel;

type GenreType = keyof typeof QuestGenre;

export type Quest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<Level, 'any'>;
  type: Exclude<GenreType, 'all' | 'sciFi'> | 'sci-fi';
  peopleMinMax: [number];
};

export type DetailQuest = Quest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

export type BookingAllDatesTypes = {
  date: string;
  times: {
    [key: string]: string;
  };
};
