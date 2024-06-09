import { useState, useEffect } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { InputOption, QuestionnaireDataValue } from '@features/questionnaire/types';
import { questionnaireActions, questionnaireSelectors } from '@features/questionnaire';

import { TextField } from '@mui/material';

interface IProps extends InputOption {
  dataKey: string;
}

export function Input({ name, label, placeholder, dataKey }: IProps) {
  const dispatch = useAppDispatch();
  const questionData = useAppSelector(questionnaireSelectors.data)[dataKey];
  const value = questionData?.[name as keyof QuestionnaireDataValue] || '';

  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    const payload = {
      dataKey,
      value: {
        ...(questionData instanceof Object && { ...questionData }),
        [name]: inputValue,
      },
    };

    dispatch(questionnaireActions.setData(payload));
  };

  return (
    <TextField
      fullWidth
      name={name}
      label={label}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      {label}
    </TextField>
  );
}
