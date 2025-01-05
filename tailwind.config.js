/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            textShadow: {
                DEFAULT: '0 4px 4px rgba(0, 0, 0, 1)',
            },
            spacing: {
                'screen-width': 'var(--screen-width)'
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                serif: ['"Rubik"', 'sans-serif']
            }
        },
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            gray: {
                200: '#BDBDBD',
                400: '#A1A0A0',
                500: '#908e92',
                600: '#515151',
            },
            navBg: '#0D0813',
            blockGradientBg: '#0D0712',
            secondary: {
                500: '#A1A0A0',
                600: '#979797',
            },
            accent: {
                200: '#C4B1D8',
                250: '#9883AE',
                300: '#A17FF1',
                400: '#B364D8',
                500: '#B255FF',
                600: '#7440A9',
                700: '#5a3580',
                800: '#3E225A',
                900: '#20132E',
            },
            type: {
                common: '#1fdbfa',
                epic: '#b255ff',
                rare: '#b8860b',
                legendary: '#daa520',
                premium: '#d1b104'
            }
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
