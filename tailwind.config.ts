import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(-100px)", opacity: "1" },
        },
        slideTop : {
          '0%' : { transform: "translateY(100px)", opacity:"0"},
          "100%" : { transform: "translateY(0)", opacity: "1" },
        },
        slideBottom : { 
          "0%" : { transform: "translateY(-100px)", opacity : "0"},
          "100%" : { transform: "translateY(0)", opacity : "1"},
        },
      },
      animation: {
        slideRight: "slideRight 1s ease forwards",
        slideTop: "slideTop 1s ease forwards",
        slideBottom  : "slideBottom  1s ease forwards"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
