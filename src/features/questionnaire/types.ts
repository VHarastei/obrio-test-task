import { ThemeMode } from '@theme/palette';

type InputType = 'button' | 'checkbox' | 'input' | 'select';

interface BaseOption {
  type: InputType;
  label: string;
}

export interface ButtonOption extends BaseOption {
  type: 'button';
  value: string;
  nextQuestionId: string;
}

export interface InputOption extends BaseOption {
  type: 'input';
  name: string;
  placeholder?: string;
}

export interface SelectOption extends BaseOption {
  type: 'select';
  name: string;
  options: { value: string; label: string }[];
}

export type QuestionOption = ButtonOption | InputOption | SelectOption;

export interface QuestionIdByDataKeyValue {
  dataKey: string;
  values: Record<string, string>;
}

type QuestionType = 'dataQuestion' | 'infoQuestion';

export interface IQuestion {
  id: string;
  dataKey: string;
  type?: QuestionType;
  themeMode?: ThemeMode;
  prevQuestionId?: string;
  nextQuestionId?: string;
  isLastQuestion?: boolean;
  title: string;
  subtitle?: string;
  options?: QuestionOption[];
  nextQuestionIdByDataKeyValue?: QuestionIdByDataKeyValue;
}

export type QuestionnaireDataValue = string | Record<string, string>;
