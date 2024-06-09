import { ButtonProps } from '@mui/material';
import { Theme, darken } from '@mui/material/styles';

export function button(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  return {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: ButtonProps }) => ({
          color: lightMode ? theme.palette.common.black : theme.palette.secondary.main,
          backgroundColor: lightMode ? theme.palette.primary.main : theme.palette.common.white,
          borderRadius: theme.spacing(2),
          padding: '20px 12px',
          boxShadow: theme.customShadows.button,
          ...(ownerState.size === 'small' && {
            fontSize: '18px',
            padding: '14px 12px',
          }),
          ...(lightMode && {
            border: '1px solid #E0E0E0',
          }),
          '&:hover': {
            backgroundColor: lightMode
              ? darken(theme.palette.primary.main, 0.075)
              : darken(theme.palette.common.white, 0.075),
          },
        }),
      },
    },
  };
}
