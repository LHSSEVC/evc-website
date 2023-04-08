/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dimmed: "#878593",
                purple: "#745DC5",
                blue: "#4899FF",
            },
        },
    },
    plugins: [],
};
