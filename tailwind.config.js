/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            colors: {
                ash: "#d2d6dc",
                cusBlack: "#333333",
                p2: "#f9dadf",
                p4: "#d8d8d8",
                cusRed: "#d03320",
                pink: "#f9dadf",
                s2: "#777",
                s3: "#ededed",
            },
            height: {
                0.5: "2px",
            },
            fontFamily: {
                DearJane: ["DearJane", "sans-serif"],
                didot: ["linotype-didot", "serif"],
                lato: ["lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
