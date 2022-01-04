import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import DefaultLayout from 'layouts/Default';
import type { AppProps } from 'next/app';
import { prismLightTheme } from 'styles/prism';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global
        styles={css`
          ${prismLightTheme}
        `}
      />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  );
}

export default MyApp;
