/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        mentora: {
          primary: '#0E3A77',
          accent: '#1A5FC1',
          background: '#F7FAFD',
          surface: '#FFFFFF',
          text: '#0B1C33',
          muted: '#5A6B85',
        },
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

