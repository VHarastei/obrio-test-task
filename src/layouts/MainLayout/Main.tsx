import { ReactNode } from 'react';
import { HEADER } from '@layouts/config';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface IProps {
  children: ReactNode;
}

export function Main({ children }: IProps) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: theme.palette.background.default,
        px: '15px',
        pt: `${HEADER.H_DESKTOP + 20}px`,
        [theme.breakpoints.down('sm')]: {
          pt: `${HEADER.H_MOBILE + 20}px`,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '330px',
          width: '100%',
          m: '0 auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
