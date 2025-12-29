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
          // Primary Navy (Refreshed deeper tones)
          primary: '#1A2B4F',
          'primary-dark': '#0B1D3E',
          'primary-light': '#2E5C8A',

          // Neutral Backgrounds (for light sections)
          neutral: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            white: '#FFFFFF',
          },

          // Text colors (WCAG AA+ compliant)
          text: '#FFFFFF',
          'text-secondary': '#E2E8F0',
          'text-muted': '#94A3B8',
          'text-dark': '#1E293B', // Rich slate for white backgrounds
          'text-on-light': '#334155', // Dark slate for 8:1 contrast on white

          // Accent Blues (Modern vibrant palette)
          accent: '#3B82F6', // Primary blue (Tailwind blue-500)
          'accent-bright': '#60A5FA', // Lighter hover state (blue-400)
          'accent-dark': '#2563EB', // Deeper variant (blue-600)
          'accent-glow': 'rgba(59, 130, 246, 0.25)',

          // Special accent variations
          sky: '#0EA5E9', // Sky blue for highlights
          indigo: '#6366F1', // Indigo for premium features
          cyan: '#06B6D4', // Cyan for data/tech elements

          // Legacy support (keep old secondary references)
          secondary: '#3B82F6',
          'secondary-light': '#60A5FA',
          'accent-light': '#60A5FA',

          // Background colors
          background: '#1A2B4F',
          'bg-dark': '#0B1D3E',
          'bg-card': '#FFFFFF',
          'bg-surface': '#1E3A5F',

          // Surface colors
          surface: '#1A2B4F',
          'surface-dark': '#0B1D3E',
          'surface-light': 'rgba(242, 246, 252, 0.06)',
          'surface-elevated': 'rgba(255, 255, 255, 0.03)',

          // Semantic colors (Enhanced)
          success: '#10B981',
          'success-light': '#34D399',
          warning: '#F59E0B',
          'warning-light': '#FBBF24',
          error: '#EF4444',
          'error-light': '#F87171',
          info: '#3B82F6',
          'info-light': '#60A5FA',

          muted: '#A9B9D9',
        },
      },
      boxShadow: {
        soft: '0 6px 18px rgba(0,0,0,0.3)',
        'soft-lg': '0 12px 32px rgba(0,0,0,0.15)',
        'card': '0 2px 8px rgba(26, 43, 79, 0.04)',
        'card-hover': '0 12px 32px rgba(59, 130, 246, 0.15)',
        'button': '0 8px 20px rgba(59, 130, 246, 0.3)',
        'button-hover': '0 12px 32px rgba(59, 130, 246, 0.4)',
        'brand': '0 8px 24px rgba(59, 130, 246, 0.3)',
        'accent-glow': '0 0 24px rgba(59, 130, 246, 0.2)',
        'blue-glow': '0 0 32px rgba(59, 130, 246, 0.25)',
        'indigo-glow': '0 0 32px rgba(99, 102, 241, 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1A2B4F 0%, #2E5C8A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
        'gradient-sky': 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
        'gradient-indigo': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-neutral': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        'gradient-neutral-reverse': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1A2B4F 0%, #0B1D3E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0B1D3E 0%, #1A2B4F 100%)',
      },
    },
    container: {
      screens: false, // Disable default container constraints
    },
  },
  plugins: [],
}

