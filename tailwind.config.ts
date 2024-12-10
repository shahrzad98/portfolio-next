import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        conthrax: ['Conthrax', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      lightGrey: '#D6D7DC',
      purple900: '#070A29',
      purple800: '#181645',
      purple700: '#231F58',
      purple600: '#6938FE',
      purple500: '#8C61FF',
      purple300: '#BFA4FF',
    },
  },
  plugins: [],
} satisfies Config;
