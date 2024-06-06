import { ThemeMode } from './palette';

interface CustomShadows {
  button: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
}

export function customShadows(mode: ThemeMode) {
  const lightMode = mode === 'light';

  return {
    button: lightMode ? '2px 2px 6px 0px #543C9740' : '0px 4px 4px 0px #D8D6D640',
  };
}
