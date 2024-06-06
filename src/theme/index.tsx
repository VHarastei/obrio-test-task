import { useMemo } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { typography } from './typography';
import { palette, ThemeMode } from './palette';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
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
    <AppCacheProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </AppCacheProvider>
  );
}
