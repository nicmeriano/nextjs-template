module.exports = {
    stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config) => {
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
