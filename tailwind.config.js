/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
    },
    fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
    },
    },
},
plugins: [],
}
