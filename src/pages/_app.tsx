import ThemeProvider from '@theme';
import type { AppProps } from 'next/app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider {...props}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
