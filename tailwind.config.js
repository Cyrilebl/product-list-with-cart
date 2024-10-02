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
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        mutedForeground: "var(--muted-foreground)",
        card: "var(--card)",
        cardForeground: "var(--card-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",
        secondary: "var(--secondary)",
        secondaryForeground: "var(--secondary-foreground)",
        accent: "var(--accent)",
        accentForeground: "var(--accent-foreground)",
        ring: "var(--ring)",
      },
      fontFamily: {
        mainFont: "var(--font-redHat)",
        titleFont: "var(--font-notoSerif)",
      },
    },
  },
  plugins: [],
};
