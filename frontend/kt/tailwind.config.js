/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 🔥 Very important for detecting JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
