import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          "blue-700": "#1E2D69",
          "blue-900": "#0C122C",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to left top, hsl(6, 100%, 80%), hsl(335, 100%, 65%))",
        "gradient-highlight":
          "linear-gradient(90deg, #FFA197 0%, #FF4A95 100%)",
      },
      animation: {
        "move-horizontally": "move-horizontally 24s linear infinite",
        "move-vertically": "move-vertically 24s linear infinite",
        scale: "scale 24s linear infinite",
      },
      keyframes: {
        "move-horizontally": {
          "0%, 100%": { transform: "translateX(4rem)" },
          "50%": { transform: "translateX(-4rem)" },
        },
        "move-vertically": {
          "0%, 100%": { transform: "translateY(4rem)" },
          "50%": { transform: "translateY(-4rem)" },
        },
        scale: {
          "0%, 100%": { transform: "scale(1.08)" },
          "50%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
