import type { Config } from "tailwindcss";

const config: Config = {
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
      gradientColorStops: {
        "start-color": "#161c24",
        "end-color": "#121212",
      },
      colors: {
        background: "#161c24",
        component: {
          light: "#2C2C2C",
          dark: "#212b36",
        },
      },
    },
  },
  plugins: [],
};
export default config;
