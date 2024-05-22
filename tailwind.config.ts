import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable dark mode based on class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748',
          foreground_rgb:"var(--foreground-rgb)",
          primaryOne:"red"
          // Add more dark mode colors as needed
        },
        light: {
          primary: '#ffffff',
          secondary: '#f7fafc',
          primaryOne:"black"
          // Add more light mode colors as needed
        },
      }
    },
  },
  plugins: [],
};
export default config;
