import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../src/theme';
import React from 'react';

export const decorators = [
    (Story) => (
        <ChakraProvider theme={theme}>
            <div className="hello">
                <Story />
            </div>
        </ChakraProvider>
    )
];
