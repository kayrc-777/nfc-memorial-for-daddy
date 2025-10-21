import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        khaki: {
          300: '#E4D5B7',
          500: '#D2B48C',
          700: '#8B7D6B',
          800: '#6B5D4D',
        },
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        'bounce-in': 'bounceIn 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '60%': { opacity: '1', transform: 'scale(1.05) translateY(-10px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;