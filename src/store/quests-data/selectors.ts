import { NameSpace } from '../../constants';
import { Selector } from '../types';

export const selectQuests = (state: Selector) => state[NameSpace.Data].quests;

export const selectCurrentQuest = (state: Selector) => state[NameSpace.Data].currentQuest;

export const selectBooking = (state: Selector) => state[NameSpace.Data].booking;
