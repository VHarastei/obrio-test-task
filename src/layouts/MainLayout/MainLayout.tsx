import Head from 'next/head';
import { ReactNode } from 'react';

import { Main } from './Main';
import { Header } from './Header';

interface IProps {
  children: ReactNode;
}

export function MainLayout({ children }: IProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
