import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'gradient-sky': {
          light: 'linear-gradient(to bottom, #A0E8FF, #FDE68A)',
          dark: 'linear-gradient(to bottom, #1E293B, #0F172A)',
        },
      },
      animation: {
        'move-clouds': 'moveClouds 20s linear infinite',
        'rotate-sun': 'rotateSun 15s linear infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        moveClouds: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotateSun: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
