import { ThemeMode } from '@theme/palette';
import { createSlice } from '@reduxjs/toolkit';

import { QuestionnaireDataValue } from '../types';

export interface QuestionnaireState {
  themeMode: ThemeMode;
  data: Record<string, QuestionnaireDataValue>;
}

const initialState: QuestionnaireState = {
  themeMode: 'light',
  data: {},
};

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
    setData: (state, action) => {
      const { dataKey, value } = action.payload;

      state.data[dataKey] = value;
    },
    resetData: (state) => {
      state.data = {};
    },
  },
});

const { actions: questionnaireActions, reducer: questionnaireReducer } = questionnaireSlice;

export { questionnaireActions, questionnaireReducer };
