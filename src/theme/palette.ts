import { grey } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
export type ThemeMode = 'light' | 'dark';

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
      default: '#FFFFFF',
      neutral: grey[200],
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
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
