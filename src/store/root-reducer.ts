import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { questsData } from './quests-data/quests-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: questsData.reducer,
});
