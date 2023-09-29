import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gloock: "var(--font-gloock)",
      },
      backgroundImage: {
        "gradient-onyx": "",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        bar: "0px 0px 50px 0px rgba(0, 0, 0, 0.5)",
        pic: "10px 0px 35px 0px rgba(0, 0, 0, 0.75)",
        logo: "0px 0px 35px 0px rgba(250, 200, 80, 0.25)",
      },
    },
    backdropFilter: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#121212",
        },
      },
    ],
  },
};

export default config;
