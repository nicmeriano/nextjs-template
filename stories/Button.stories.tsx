import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@chakra-ui/react';

export default {
    title: 'Button',
    component: Button
};

export const Default = () => (
    <Button onClick={action('clicked')} colorScheme="green">
        Click me
    </Button>
);
