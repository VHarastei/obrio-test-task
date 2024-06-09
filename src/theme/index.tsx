import { useMemo } from 'react';
import { AppProps } from 'next/app';
import { useAppSelector } from '@hooks/useAppSelector';
import { questionnaireSelectors } from '@features/questionnaire';

import CssBaseline from '@mui/material/CssBaseline';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { palette } from './palette';
import { typography } from './typography';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';

interface IProps extends AppProps {
  children: React.ReactNode;
}

export default function ThemeProvider(props: IProps) {
  const { children } = props;
  const themeMode = useAppSelector(questionnaireSelectors.themeMode);

  const memoizedValue = useMemo(
    () => ({
      typography,
      palette: palette(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeMode]
  );

  const theme = createTheme(memoizedValue as ThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <AppCacheProvider {...props}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppCacheProvider>
  );
}
