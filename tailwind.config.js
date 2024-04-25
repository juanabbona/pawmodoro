/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      sm: "0 0 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 0 3px 0 rgba(0, 0, 0, 0.1)",
      md: "0 0 6px -1px rgba(0, 0, 0, 0.1)",
      lg: "0 0 15px -3px rgba(0, 0, 0, 0.1)",
      xl: "0 0 25px -5px rgba(0, 0, 0, 0.1)",
      "2xl": "0 0 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
  },
  plugins: [],
};
