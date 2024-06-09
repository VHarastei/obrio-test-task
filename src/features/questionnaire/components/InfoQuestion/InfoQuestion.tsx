import { renderTemplateText } from '@utils';
import { useAppSelector } from '@hooks/useAppSelector';
import { IQuestion } from '@features/questionnaire/types';
import { getNextQuestionId, questionnaireSelectors } from '@features/questionnaire';

import { Stack, Button, Typography } from '@mui/material';

interface IProps {
  question: IQuestion;
  onNextQuestion: (questionId: string) => void;
}

export function InfoQuestion({ question, onNextQuestion }: IProps) {
  const data = useAppSelector(questionnaireSelectors.data);
  const nextQuestionId = getNextQuestionId(data, question);

  return (
    <Stack gap="30px">
      <Stack gap={2.5}>
        <Typography variant="h1" align="center">
          {renderTemplateText(question.title, data)}
        </Typography>
        {question.subtitle && (
          <Typography variant="body2" align="center">
            {renderTemplateText(question.subtitle, data)}
          </Typography>
        )}
      </Stack>

      {nextQuestionId && (
        <Button size="small" sx={{ mt: 1.25 }} onClick={() => onNextQuestion(nextQuestionId)}>
          Next
        </Button>
      )}
    </Stack>
  );
}
