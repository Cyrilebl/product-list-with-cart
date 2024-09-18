/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondaryBackground: "var(--secondaryBackground)",
        foreground: "var(--foreground)",
        secondaryForeground: "var(--secondaryForeground)",
        border: "var(--border)",
        title: "var(--title)",
        price: "var(--price)",
        green: "var(--green)",
      },
      fontFamily: {
        mainFont: "var(--font-redHat)",
      },
    },
  },
  plugins: [],
};
