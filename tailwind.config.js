/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dimmed: "#878593",
                purple: "#A31AE7",
                blue: "#0000FF",
            },
        },
    },
    plugins: [],
};
