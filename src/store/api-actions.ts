import { createAsyncThunk } from '@reduxjs/toolkit';
import { BookingTypes, DetailQuestType, QuestType } from '../types';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../constants';
import { AppDispatch, State } from './types';

export const fetchQuestsAction = createAsyncThunk<QuestType[] | [], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestType[] | [] >(APIRoute.Quests);
    return data;
  },
);

export const fetchQuestAction = createAsyncThunk<DetailQuestType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuest',
  async (id, {extra: api}) => {
    const {data} = await api.get<DetailQuestType>(`${APIRoute.Quests}/${id}`);
    return data;
  },
);

export const fetchBookingAction = createAsyncThunk<BookingTypes[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchBooking',
  async (id, {extra: api}) => {
    const {data} = await api.get<BookingTypes[]>(`${APIRoute.Quests}/${id}/booking`);
    return data;
  },
);
