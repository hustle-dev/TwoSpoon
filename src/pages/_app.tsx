import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'styles/GlobalStyle';
import { StoreProvider } from 'store';
import { Layout, ErrorBoundary } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GlobalStyle />
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default MyApp;
