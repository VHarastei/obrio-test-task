import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { ButtonOption } from '@features/questionnaire/types';
import { questionnaireActions, questionnaireSelectors } from '@features/questionnaire';

import { useTheme } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';

interface IProps extends ButtonOption {
  dataKey: string;
  onNextQuestion: (questionId: string) => void;
}

export function Button({ value, label, nextQuestionId, dataKey, onNextQuestion }: IProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const questionData = useAppSelector(questionnaireSelectors.data)[dataKey];
  const isActive = questionData === value;

  const handleSelectOption = () => {
    dispatch(
      questionnaireActions.setData({
        dataKey,
        value,
      })
    );
    onNextQuestion(nextQuestionId);
  };

  return (
    <MuiButton
      fullWidth
      onClick={handleSelectOption}
      sx={{
        ...(isActive && {
          color: theme.palette.common.white,
          background: theme.palette.action.activeButton,
          '&:hover': {
            opacity: 0.9,
          },
        }),
      }}
    >
      {label}
    </MuiButton>
  );
}
