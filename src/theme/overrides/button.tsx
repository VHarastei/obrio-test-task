import { Theme, darken } from '@mui/material/styles';

export function button(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          color: lightMode ? theme.palette.common.black : theme.palette.secondary.main,
          backgroundColor: lightMode ? theme.palette.primary.main : theme.palette.common.white,
          borderRadius: theme.spacing(2),
          padding: '20px 12px',
          boxShadow: theme.customShadows.button,
          ...(lightMode && {
            border: '1px solid #E0E0E0',
          }),
          '&:hover': {
            backgroundColor: lightMode
              ? darken(theme.palette.primary.main, 0.05)
              : darken(theme.palette.common.white, 0.05),
          },
        },
      },
    },
  };
}
