// Unified motion design system configuration
export const MOTION = {
  // Easing curves
  ease: {
    smooth: 'easeOut',
    smoothReturn: 'easeInOut',
    sharp: 'easeIn',
    bounce: [0.175, 0.885, 0.32, 1.275],
  },

  // Timing (in seconds)
  duration: {
    fast: 0.3,
    medium: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },

  // Delays for stagger effects
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },

  // Preset transitions
  transitions: {
    // Page/section entrance
    slideUpFade: (delay = 0, duration = 0.6) => ({
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -40 },
      transition: { delay, duration, ease: 'easeOut' },
    }),

    // Scale pop entrance
    scaleIn: (delay = 0, duration = 0.5) => ({
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
      transition: { delay, duration, ease: 'easeOut' },
    }),

    // Fade only
    fadeInOut: (delay = 0, duration = 0.4) => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { delay, duration, ease: 'easeOut' },
    }),

    // Slide from left
    slideFromLeft: (delay = 0, duration = 0.5) => ({
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -60 },
      transition: { delay, duration, ease: 'easeOut' },
    }),

    // Slide from right
    slideFromRight: (delay = 0, duration = 0.5) => ({
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 60 },
      transition: { delay, duration, ease: 'easeOut' },
    }),

    // Page route transition (full layout)
    pageTransition: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  },

  // Hover effects
  hover: {
    lift: { y: -4, transition: { duration: 0.2 } },
    shadow: {
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: { duration: 0.2 },
    },
    scale: { scale: 1.05, transition: { duration: 0.2 } },
    brighten: { opacity: 1.2, transition: { duration: 0.2 } },
  },

  // Continuous animations
  continuous: {
    float: (duration = 4) => ({
      y: [0, -12, 0],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    }),

    pulse: (duration = 2) => ({
      opacity: [1, 0.6, 1],
      transition: { duration, repeat: Infinity, ease: 'easeInOut' },
    }),

    shimmer: (duration = 2) => ({
      backgroundPosition: ['0% 0%', '100% 0%'],
      transition: { duration, repeat: Infinity, ease: 'linear' },
    }),
  },

  // Stagger container for lists
  staggerContainer: (staggerChildrenDelay = 0.1) => ({
    initial: 'hidden',
    animate: 'visible',
    variants: {
      visible: {
        transition: {
          staggerChildren: staggerChildrenDelay,
        },
      },
    },
  }),

  staggerChild: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
};

export default MOTION;
