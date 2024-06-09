import { IQuestion, QuestionnaireDataValue } from '../types';
import { QuestionnaireState } from '../store/questionnaire.slice';

export const getNextQuestionId = (data: QuestionnaireState['data'], question: IQuestion) => {
  if (question.nextQuestionId) return question.nextQuestionId;

  if (question.nextQuestionIdByDataKeyValue) {
    const { dataKey, values } = question.nextQuestionIdByDataKeyValue;
    const dataByKey = data[dataKey];

    const nextId = values[dataByKey as keyof QuestionnaireDataValue];

    return nextId;
  }

  return '404';
};
