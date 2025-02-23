const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            // Your custom theme extensions
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("daisyui")
    ],
    // DaisyUI config (optional)
    daisyui: {
        themes: ["light", "dark"],
    },
};