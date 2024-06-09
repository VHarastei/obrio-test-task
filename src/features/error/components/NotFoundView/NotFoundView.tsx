import Link from 'next/link';

import { Stack, Button, Typography } from '@mui/material';

export const NotFoundView = () => (
  <Stack gap={2} sx={{ mt: 6 }}>
    <Typography variant="h1" align="center">
      Page not found!
    </Typography>
    <Button fullWidth component={Link} href="/">
      Go home
    </Button>
  </Stack>
);
