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
          // Primary Navy
          primary: '#0F1F3D',
          'primary-dark': '#0A1628',
          'primary-light': '#1C4E80',

          // Neutral Backgrounds (for light sections)
          neutral: {
            50: '#F6F9FC',
            100: '#ECF3FA',
            white: '#FFFFFF',
          },

          // Text colors (WCAG AA compliant)
          text: '#FFFFFF',
          'text-secondary': '#E2E8F0',
          'text-muted': '#94A3B8',
          'text-dark': '#1A202C', // Darker for 12:1 contrast on white
          'text-on-light': '#334155', // Dark slate for 8:1 contrast on white

          // Accent Blue
          accent: '#5B9BD5',
          'accent-bright': '#7DB3E0',
          'accent-glow': 'rgba(91, 155, 213, 0.3)',

          // Legacy support (keep old secondary references)
          secondary: '#5B9BD5',
          'secondary-light': '#7DB3E0',
          'accent-light': '#7DB3E0',

          // Background colors
          background: '#0F1F3D',
          'bg-dark': '#0A1628',
          'bg-card': '#FFFFFF',

          // Surface colors
          surface: '#0F1F3D',
          'surface-dark': '#0A1628',
          'surface-light': 'rgba(242, 246, 252, 0.05)',

          // Semantic colors
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#1E5EFF',

          muted: '#A9B9D9',
        },
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.3)',
        'soft-lg': '0 12px 32px rgba(0,0,0,0.15)',
        'card': '0 2px 8px rgba(15, 31, 61, 0.04)',
        'card-hover': '0 12px 32px rgba(15, 31, 61, 0.12)',
        'button': '0 8px 20px rgba(91, 155, 213, 0.3)',
        'button-hover': '0 12px 32px rgba(91, 155, 213, 0.4)',
        'brand': '0 8px 24px rgba(91, 155, 213, 0.3)',
        'accent-glow': '0 0 24px rgba(91, 155, 213, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F1F3D 0%, #1C4E80 100%)',
        'gradient-accent': 'linear-gradient(135deg, #5B9BD5 0%, #7DB3E0 100%)',
        'gradient-neutral': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)', // Cleaner white gradient
        'gradient-neutral-reverse': 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)', // Pure white
        'gradient-hero': 'linear-gradient(180deg, #0F1F3D 0%, #0A1628 100%)',
      },
    },
    container: {
      screens: false, // Disable default container constraints
    },
  },
  plugins: [],
}

