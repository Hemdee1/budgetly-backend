"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    content: [
        "./emails/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            width: {
                fullscreen: "900px",
            },
            colors: {
                primary: "#0257EF",
            },
            fontFamily: {
                Manrope: '"Manrope", sans-serif',
            },
        },
    },
    plugins: [],
};
exports.default = config;
