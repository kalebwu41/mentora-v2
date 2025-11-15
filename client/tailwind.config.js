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
          teal: '#35b0ab',
          navy: '#0b1f3a',
          sky: '#b7f5ef',
          sand: '#f6efe8',
        },
      },
      boxShadow: {
        soft: '0 10px 40px rgba(13, 55, 80, 0.12)',
      },
    },
  },
  plugins: [],
}

