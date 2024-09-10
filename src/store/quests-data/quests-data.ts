import { createSlice } from '@reduxjs/toolkit';
import { BookingTypes, DetailQuestType, QuestType } from '../../types';
import { NameSpace } from '../../constants';
import { fetchBookingAction, fetchQuestAction, fetchQuestsAction } from '../api-actions';

type QuestsData = {
  quests: QuestType[];
  currentQuest: DetailQuestType | null;
  booking: BookingTypes[];
  isQuestsDataLoading: boolean;
  isQuestsError: boolean;
  isQuestDataLoading: boolean;
  isQuestError: boolean;
};

const initialState: QuestsData = {
  quests: [],
  currentQuest: null,
  booking: [],
  isQuestsDataLoading: false,
  isQuestsError: false,
  isQuestDataLoading: false,
  isQuestError: false,
};

export const questsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isQuestsDataLoading = true;
        state.isQuestsError = false;
      })
      .addCase(fetchQuestsAction.rejected, (state) => {
        state.isQuestsDataLoading = false;
        state.isQuestsError = true;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestsDataLoading = false;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestDataLoading = true;
        state.isQuestError = false;
      })
      .addCase(fetchQuestAction.rejected, (state) => {
        state.isQuestDataLoading = false;
        state.isQuestError = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.currentQuest = action.payload;
        state.isQuestDataLoading = false;
      })
      .addCase(fetchBookingAction.fulfilled, (state, action) => {
        state.booking = action.payload;
      });
  }
});
