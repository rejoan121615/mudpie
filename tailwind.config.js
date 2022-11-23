/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                ash: "#d2d6dc",
                cusBlack: "#333333",
                p2: "#f9dadf",
            },
            height: {
                0.5: "2px",
            },
            fontFamily: {
                DearJane: ["DearJane", "sans-serif"],
                didot: ["linotype-didot", "serif"],
                lato: ["lato", 'sans-serif'],
            },
        },
    },
    plugins: [],
};
