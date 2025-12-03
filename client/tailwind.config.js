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
          // Primary brand colors (deep navy background)
          primary: '#0A1628',
          'primary-dark': '#030A13',
          'primary-light': '#1A4D99',

          // Accent colors (Mentora blue)
          accent: '#1E5EFF',
          'accent-hover': '#3B72FF',
          'accent-light': 'rgba(30, 94, 255, 0.1)',
          
          // Text colors (high contrast for accessibility)
          text: '#F2F6FC',
          'text-secondary': '#A9B9D9',
          'text-muted': '#697B95',
          
          // Secondary colors
          secondary: '#F59E0B',
          'secondary-light': '#FBBF24',
          
          // Background colors
          background: '#0A1628',
          'bg-dark': '#0A1628',
          'bg-card': '#0A1628',
          
          // Surface colors
          surface: '#0A1628',
          'surface-dark': '#030A13',
          'surface-light': 'rgba(242, 246, 252, 0.05)',
          
          // Semantic colors
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#1E5EFF',
          
          // Gradients (via gradient-to-r, etc.)
          gradient: {
            'primary-to-accent': 'from-mentora-primary to-mentora-accent',
            'secondary-to-primary': 'from-mentora-secondary to-mentora-primary',
          },
          
          muted: '#A9B9D9',
        },
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.3)',
        'soft-lg': '0 12px 32px rgba(0,0,0,0.15)',
        'brand': '0 8px 24px rgba(30, 94, 255, 0.3)',
        'accent-glow': '0 0 24px rgba(30, 94, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0A1628 0%, #1A4D99 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1E5EFF 0%, #3B72FF 100%)',
      },
    },
    container: {
      screens: false, // Disable default container constraints
    },
  },
  plugins: [],
}

