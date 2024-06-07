import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
export type ThemeMode = 'light' | 'dark';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    icons: { main: string };
  }

  interface PaletteOptions {
    icons?: { main: string };
  }
}

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const primary = {
  main: '#EAEEF7',
  contrastText: common.white,
};

export const secondary = {
  main: '#6A3AA2',
  contrastText: common.white,
};

export const info = {
  main: '#00B8D9',
  contrastText: common.white,
};

export const success = {
  main: '#22C55E',
  contrastText: common.white,
};

export const warning = {
  main: '#FFAB00',
  contrastText: grey[800],
};

export const error = {
  main: '#FF5630',
  contrastText: common.white,
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

export function palette(mode: ThemeMode) {
  const light = {
    ...base,
    mode: 'light',
    text: {
      primary: '#201F1F',
      secondary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: '#FFF0F0',
      neutral: grey[200],
    },
    icons: {
      main: common.black,
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    text: {
      primary: '#FBFBFF',
      secondary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default:
        'linear-gradient(165.54deg, #141333 -33.39%, #202261 15.89%, #543C97 55.84%, #6939A2 74.96%)',
      neutral: alpha(grey[500], 0.12),
    },
    icons: {
      main: common.white,
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
