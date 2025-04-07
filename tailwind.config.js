/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        navy: {
          600: '#1e3a8a',
        }
      },
      animation: {
        'toast-in': 'toastIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'toast-out': 'toastOut 0.5s ease-in forwards',
        'checkmark-circle': 'checkmarkCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards',
        'draw': 'draw 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.2s forwards',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        toastIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(100%) translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0) translateY(0)'
          },
        },
        toastOut: {
          '0%': { 
            opacity: '1',
            transform: 'translateX(0) translateY(0)'
          },
          '100%': { 
            opacity: '0',
            transform: 'translateX(100%) translateY(20px)'
          },
        },
        checkmarkCircle: {
          '0%': { 
            strokeDashoffset: '60',
            opacity: '1'
          },
          '100%': { 
            strokeDashoffset: '0',
            opacity: '1'
          },
        },
        draw: {
          '0%': { 
            strokeDashoffset: '30'
          },
          '100%': { 
            strokeDashoffset: '0'
          },
        },
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
    },
  },
  plugins: [],
};