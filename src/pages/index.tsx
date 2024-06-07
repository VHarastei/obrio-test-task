import { MainLayout } from '@layouts';

import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <MainLayout>
      <Typography variant="h1">
        So we can get to know you better, tell us about your relationship status.
      </Typography>

      <Button color="success" fullWidth>
        nice
      </Button>
    </MainLayout>
  );
}
