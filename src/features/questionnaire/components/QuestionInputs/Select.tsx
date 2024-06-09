import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { questionnaireActions } from '@features/questionnaire';
import { SelectOption, QuestionnaireDataValue } from '@features/questionnaire/types';
import { questionnaireSelectors } from '@features/questionnaire/store/questionnaire.selectors';

import {
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Select as MuiSelect,
} from '@mui/material';

interface IProps extends SelectOption {
  dataKey: string;
}

export function Select({ name, label, options, dataKey }: IProps) {
  const dispatch = useAppDispatch();
  const questionData = useAppSelector(questionnaireSelectors.data)[dataKey];
  const value = questionData?.[name as keyof QuestionnaireDataValue] as string;

  const handleChange = (event: SelectChangeEvent) => {
    const payload = {
      dataKey,
      value: {
        ...(questionData instanceof Object && { ...questionData }),
        [name]: event.target.value,
      },
    };

    dispatch(questionnaireActions.setData(payload));
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        variant="filled"
        fullWidth
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
