/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            textShadow: {
                DEFAULT: '0 4px 4px rgba(0, 0, 0, 1)',
            },
        },
        colors: {
            white: '#FFFFFF',
            black: '#000000',
            secondary: {
                500: '#A1A0A0',
                600: '#979797',
            },
            accent: {
                200: '#C4B1D8',
                300: '#A17FF1',
                400: '#B364D8',
                500: '#B255FF',
                600: '#7440A9',
                700: '#5a3580',
                800: '#3E225A',
            },
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
