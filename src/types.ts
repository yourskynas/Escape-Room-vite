import { QuestGenre, QuestLevel } from './constants';

type Level = keyof typeof QuestLevel;

type GenreType = keyof typeof QuestGenre;

export type QuestType = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<Level, 'any'>;
  type: Exclude<GenreType, 'all' | 'sciFi'> | 'sci-fi';
  peopleMinMax: number[];
};

export type ReservationType = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  quest: QuestType;
};

export type DetailQuestType = QuestType & {
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

export type SlotsDateTypes = {
  time: string;
  isAvailable: boolean;
};

export type SlotsTypes = {
  today: SlotsDateTypes[];
  tomorrow: SlotsDateTypes[];
};

export type BookingTypes = {
  id: string;
  location: {
    address: string;
    coords: number[];
  };
  slots: SlotsTypes;
};
