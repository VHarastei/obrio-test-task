import { RootState } from 'src/store';

export const questionnaireSelectors = {
  state: (state: RootState) => state.questionnaire,
  themeMode: (state: RootState) => state.questionnaire.themeMode,
  data: (state: RootState) => state.questionnaire.data,
};
