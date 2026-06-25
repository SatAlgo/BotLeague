/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'arena-dark': '#1A1919',
        'arena-darker': '#111010',
        'arena-red': '#E8243C',
        'arena-red-dark': '#C01A2F',
        'arena-blue': '#2F6BFF',
        'arena-gray': '#222121',
        'arena-card': '#1E1D1D',
        'arena-border': '#332F2F',
        'arena-text': '#CFCACA',
        'arena-muted': '#8A8585',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
