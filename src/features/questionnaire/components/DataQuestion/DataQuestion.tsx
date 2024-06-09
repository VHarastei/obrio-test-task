import { renderTemplateText } from '@utils';
import { useAppSelector } from '@hooks/useAppSelector';
import { questionnaireSelectors } from '@features/questionnaire';
import { IQuestion, QuestionOption } from '@features/questionnaire/types';

import { Stack, Button, Typography } from '@mui/material';

import { QuestionInputs } from '../QuestionInputs';

interface IProps {
  question: IQuestion;
  onNextQuestion: (questionId: string) => void;
}

export function DataQuestion({ question, onNextQuestion }: IProps) {
  const { nextQuestionId } = question;
  const data = useAppSelector(questionnaireSelectors.data);

  function renderOption(option: QuestionOption) {
    if (option.type === 'button')
      return (
        <QuestionInputs.Button
          dataKey={question.dataKey}
          onNextQuestion={onNextQuestion}
          {...option}
        />
      );

    if (option.type === 'input')
      return <QuestionInputs.Input dataKey={question.dataKey} {...option} />;

    if (option.type === 'select')
      return <QuestionInputs.Select dataKey={question.dataKey} {...option} />;

    return null;
  }

  return (
    <Stack gap="30px">
      <Stack gap={2.5}>
        <Typography variant="h1" align={question.options ? 'left' : 'center'}>
          {renderTemplateText(question.title, data)}
        </Typography>
        {question.subtitle && (
          <Typography variant="h5" align="center">
            {renderTemplateText(question.subtitle, data)}
          </Typography>
        )}
      </Stack>

      {question.options && (
        <Stack gap={2.5}>
          {question.options?.map((option) => (
            <div key={option.type + option.label}>{renderOption(option)}</div>
          ))}
        </Stack>
      )}

      {nextQuestionId && (
        <Button size="small" sx={{ mt: 1.25 }} onClick={() => onNextQuestion(nextQuestionId)}>
          Next
        </Button>
      )}
    </Stack>
  );
}
