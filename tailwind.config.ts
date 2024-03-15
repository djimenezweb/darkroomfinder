import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': {
          100: 'hsl(0, 0%, 8.6%)',
          200: 'hsl(0, 0%, 11.0%)',
          300: 'hsl(0, 0%, 13.7%)',
          400: 'hsl(0, 0%, 15.7%)',
          500: 'hsl(0, 0%, 18.0%)',
          600: 'hsl(0, 0%, 20.4%)',
          700: 'hsl(0, 0%, 24.3%)',
          800: 'hsl(0, 0%, 31.4%)',
          900: 'hsl(0, 0%, 43.9%)',
          1000: 'hsl(0, 0%, 49.4%)',
          1100: 'hsl(0, 0%, 62.7%)',
          1200: 'hsl(0, 0%, 92.9%)'
        },
        'red-error': {
          200: 'hsl(10.9, 23.4%, 9.2%)',
          400: 'hsl(6.7, 60%, 20.6%)',
          500: 'hsl(7.9, 71.6%, 29%)',
          900: '#e5484d'
        },
        error: {
          200: '#271700',
          500: '#693f05',
          900: '#f1a10d'
        }
      }
    }
  },
  plugins: []
};
export default config;
