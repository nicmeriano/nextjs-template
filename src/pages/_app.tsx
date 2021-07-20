import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';
import { theme } from '../theme';

const myTheme = extendTheme(theme);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={myTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
