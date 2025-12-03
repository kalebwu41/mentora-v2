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
          // Primary brand colors (deep navy)
          primary: '#0E3A77',
          'primary-dark': '#0A2347',
          'primary-light': '#1A5FC1',

          // Accent colors (light blue highlight)
          accent: '#AEE8FF',
          'accent-bright': '#7FE0FF',
          'accent-light': '#DFF8FF',
          
          // Secondary colors
          secondary: '#F59E0B',
          'secondary-light': '#FBBF24',
          
          // Background colors
          background: '#FFFFFF',
          'bg-dark': '#0F1419',
          'bg-card': '#FFFFFF',
          
          // Surface colors
          surface: '#FFFFFF',
          'surface-dark': '#1F2937',
          'surface-light': '#F3F4F6',
          
          // Text colors
          text: '#0B1C33',
          'text-light': '#5A6B85',
          'text-lighter': '#9CA3AF',
          
          // Semantic colors
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
          
          // Gradients (via gradient-to-r, etc.)
          gradient: {
            'primary-to-accent': 'from-mentora-primary to-mentora-accent-bright',
            'secondary-to-primary': 'from-mentora-secondary to-mentora-primary',
          },
          
          muted: '#5A6B85',
        },
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.06)',
        'soft-lg': '0 12px 32px rgba(0,0,0,0.12)',
        'brand': '0 8px 24px rgba(14, 58, 119, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0E3A77 0%, #1A5FC1 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-accent': 'linear-gradient(135deg, #1A5FC1 0%, #2563EB 100%)',
      },
    },
    container: {
      screens: false, // Disable default container constraints
    },
  },
  plugins: [],
}

