/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#22223b",
                secondary: "#4a4e69",
                tertiary: "#9a8c98",
                quaternary: "#c9ada7",
                quinary: "#f2e9e4",
            },
        },
    },
    plugins: [],
};
