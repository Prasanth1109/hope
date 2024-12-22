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
        'bounce-slow': 'bounce 2s infinite',
        bubble: 'bubble 6s infinite ease-in-out',
        move: "move 5s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
        move2: "move 6s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
        move3: "move 7s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
        move4: "move 5s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite",
        // bubble: 'bubble 3s ease-in-out infinite',
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
        bubble: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '50%': { transform: 'translateY(-200px) scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'translateY(-400px) scale(0.5)', opacity: '0' },
        },
        move: {
          "0%": { transform: "translate3d(-60px, 0, 0)" },
          "100%": { transform: "translate3d(120px, 0, 0)" },
        },
        // bubble: {
        //   '0%': { transform: 'scale(0.9)', opacity: '0.7' },
        //   '50%': { transform: 'scale(1.1)', opacity: '1' },
        //   '100%': { transform: 'scale(0.9)', opacity: '0.7' },
        // },
      }
    },
  },
  plugins: [],
} satisfies Config;
