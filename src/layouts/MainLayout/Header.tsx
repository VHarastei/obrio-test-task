import { useRouter } from 'next/router';
import { HEADER } from '@layouts/config';
import LogoSvg from '@components/icons/LogoSvg';
import ArrowLeftSvg from '@components/icons/ArrowLeftSvg';

import AppBar from '@mui/material/AppBar';
import { Box, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface IProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton }: IProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <AppBar
      sx={{
        position: 'absolute',
        height: HEADER.H_DESKTOP,
        background: 'transparent',
        boxShadow: 'none',
        zIndex: theme.zIndex.appBar + 1,
        display: 'flex',
        justifyContent: 'center',
        px: '165px',
        [theme.breakpoints.down('sm')]: {
          height: HEADER.H_MOBILE,
          px: '15px',
        },
      }}
    >
      <Box>
        {showBackButton && (
          <IconButton sx={{ p: 0.5 }} onClick={router.back}>
            <ArrowLeftSvg sx={{ width: 16, height: 16 }} htmlColor={theme.palette.icons.main} />
          </IconButton>
        )}
      </Box>
      <LogoSvg
        sx={{
          width: 16,
          height: 16,
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        htmlColor={theme.palette.icons.main}
      />
    </AppBar>
  );
}
