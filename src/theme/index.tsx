import { useMemo } from 'react';
import { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { typography } from './typography';
import { palette, ThemeMode } from './palette';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';

interface IProps extends AppProps {
  children: React.ReactNode;
}

export default function ThemeProvider(props: IProps) {
  const { children } = props;

  const memoizedValue = useMemo(
    () => ({
      typography,
      palette: palette('light' as ThemeMode),
      customShadows: customShadows('light' as ThemeMode),
    }),
    []
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
