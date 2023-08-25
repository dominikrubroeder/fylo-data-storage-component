import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          'blue-700': '#1E2D69',
          'blue-900': '#0C122C',
        },
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(to left top, hsl(6, 100%, 80%), hsl(335, 100%, 65%))',
        'gradient-highlight':
          'linear-gradient(90deg, #FFA197 0%, #FF4A95 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
