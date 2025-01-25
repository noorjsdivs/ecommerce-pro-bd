import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkColor: "#151515",
        lightColor: "#52525b",
        lightOrange: "#fca99b",
        lightBlue: "#7688DB",
        darkBlue: "#6c7fd8",
        darkText: "#686e7d",
        lightBg: "#F8F8FB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
