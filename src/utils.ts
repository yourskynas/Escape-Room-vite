import { QuestGenre, QuestLevel } from './constants';

export const getLevelName = (value: string) => {
  switch(value) {
    case 'easy':
      return QuestLevel.easy;
    case 'medium':
      return QuestLevel.medium;
    case 'hard':
      return QuestLevel.hard;
  }
};

export const getGenreName = (value: string) => {
  switch(value) {
    case 'adventures':
      return QuestGenre.adventures;
    case 'horror':
      return QuestGenre.horror;
    case 'mystic':
      return QuestGenre.mystic;
    case 'detective':
      return QuestGenre.detective;
    case 'ski-fi':
      return QuestGenre.sciFi;
  }
};
