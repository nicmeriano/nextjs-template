export type Typography = typeof typography;

export const typography = {
    letterSpacings: {
        xs: '-0.05em',
        sm: '-0.025em',
        md: '0',
        lg: '0.025em',
        xl: '0.05em',
    },

    lineHeights: {
        none: 1,
        sm: 1.15,
        md: 1.25,
        lg: 1.5,
    },

    fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    fonts: {
        heading: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,`,
        body: `    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
        mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    },

    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
};
