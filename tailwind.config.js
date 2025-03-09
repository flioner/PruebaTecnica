import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0%", transform: "translateY(30px)" },
          to: { opacity: "100%", transform: "translateY(0px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
