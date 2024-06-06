import Head from 'next/head';

import { Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: '#FFF0F0', width: '100vw', height: '100vh' }}>
        <Typography variant="h1">Test text</Typography>
        <Button color="success">nice</Button>
      </main>
    </>
  );
}