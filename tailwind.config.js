/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            "main-purple": {
                '50': '#fdf2f9',
                '100': '#fde6f6',
                '200': '#fcceee',
                '300': '#fba6df',
                '400': '#f86ec8',
                '500': '#f143b0',
                '600': '#e0228f',
                '700': '#c31374',
                '800': '#a1135f',
                '900': '#861551',
                '950': '#560530',
            },
            "main-green": {
                '50': '#ecfff4',
                '100': '#d3ffe7',
                '200': '#aaffd1',
                '300': '#69ffaf',
                '400': '#21ff85',
                '500': '#00f263',
                '600': '#00ca4e',
                '700': '#009e40',
                '800': '#00853c',
                '900': '#026530',
                '950': '#003918',
            },
        }
    },
    plugins: []
}