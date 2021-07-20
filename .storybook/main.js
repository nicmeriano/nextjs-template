const path = require('path');

module.exports = {
    stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['sass-loader'],
            include: path.resolve(__dirname, '../')
        });

        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    '@emotion/core': '@emotion/react',
                    'emotion-theming': '@emotion/react'
                }
            }
        };
    }
};
