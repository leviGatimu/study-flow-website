/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        background: "var(--background)",
        foreground: "var(--foreground)",
        sand: {
          100: "#f6efe1",
          200: "#ece0c9",
          300: "#d9c6a3",
          400: "#bda579",
          500: "#a98c5f",
        },
        ink: {
          900: "#13110d",
          800: "#1c1913",
          700: "#26221a",
        },
      },
      fontFamily: {
        sans: ["Clash Grotesk", "system-ui", "sans-serif"],
        heading: ["Clash Display", "Clash Grotesk", "sans-serif"],
        display: ["Clash Display", "Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
