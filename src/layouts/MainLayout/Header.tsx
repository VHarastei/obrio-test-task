import { HEADER } from '@layouts/config';
import LogoSvg from '@components/icons/LogoSvg';
import ArrowLeftSvg from '@components/icons/ArrowLeftSvg';

import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export function Header() {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: 'absolute',
        height: HEADER.H_DESKTOP,
        background: 'transparent',
        boxShadow: 'none',
        zIndex: theme.zIndex.appBar + 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: '165px',
        [theme.breakpoints.down('sm')]: {
          height: HEADER.H_MOBILE,
          px: '15px',
        },
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <IconButton sx={{ p: 0.5 }}>
          <ArrowLeftSvg sx={{ width: 16, height: 16 }} htmlColor={theme.palette.icons.main} />
        </IconButton>
        <LogoSvg sx={{ width: 16, height: 16 }} htmlColor={theme.palette.icons.main} />
        <Box />
      </Stack>
    </AppBar>
  );
}
