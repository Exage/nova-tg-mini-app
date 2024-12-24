/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            secondary: {
                500: '#A1A0A0',
                600: '#979797'
            },
            accent: {
                500: '#7440A9',
                400: '#A17FF1',
                300: '#B364D8',
                700: '#3E225A',
                600: '#B255FF',
                200: '#C4B1D8',
            },
        }
    },
    plugins: [],
}

