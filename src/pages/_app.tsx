import ThemeProvider from '@theme';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { ErrorFallbackView } from '@features/error';
import { ErrorBoundary } from 'react-error-boundary';
import { persistor, rootStore } from '@store/rootStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackView} onReset={() => window.location.reload()}>
      <Provider store={rootStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider {...props}>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
