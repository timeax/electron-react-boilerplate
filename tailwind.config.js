const colors = require('./tailwind/colors.js');

module.exports = {
    content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors,
        },

        screens: {
            '3xs': { max: '280px' },
            '2xs': { max: '320px' },
            xs: { max: '375px' },
            sm: { max: '576px' },
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1366px',
            '3xl': '1536px',
            '4xl': '1920px',
        },
    },
    variants: {},
    plugins: [],
};
