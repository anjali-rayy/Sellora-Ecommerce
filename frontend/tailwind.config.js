/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  darkMode: 'class', // ✅ Enables class-based dark mode
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)', // used in .shadow-3xl
      },
      backdropBlur: {
        '3xl': '64px', // used in .backdrop-blur-3xl
      },
      backgroundSize: {
        '300': '300% 300%', // used in .bg-300
      },
      animation: {
        blob: 'blob 7s infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay-1': 'float-delay-1 4s ease-in-out infinite',
        'float-delay-2': 'float-delay-2 5s ease-in-out infinite',
        'float-delay-3': 'float-delay-3 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-delay-1': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.2)' },
        },
        'float-delay-2': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(10px)' },
          '66%': { transform: 'translateY(-5px) translateX(-5px)' },
        },
        'float-delay-3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-25px) rotate(45deg) scale(0.8)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
