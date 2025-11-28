import { motion } from 'framer-motion';
import MOTION from '../../utils/motionConfig.js';

/**
 * Page transition wrapper for routes
 * Wraps entire page content with fade in/out
 */
export function PageTransition({ children }) {
  return (
    <motion.div
      {...MOTION.transitions.pageTransition}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container for animating lists of items
 * Each child item animates in sequence
 */
export function StaggerContainer({ children, delay = 0.1 }) {
  return (
    <motion.div
      variants={MOTION.staggerContainer(delay)}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated card for uniform card animations
 */
export function AnimatedCard({ children, delay = 0, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      {...MOTION.transitions.slideUpFade(delay)}
      whileHover={MOTION.hover.lift}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section header with smooth entrance
 */
export function SectionTitle({ children, delay = 0 }) {
  return (
    <motion.div
      {...MOTION.transitions.slideUpFade(delay, 0.6)}
    >
      {children}
    </motion.div>
  );
}

/**
 * Loading skeleton with pulse animation
 */
export function SkeletonLoader({ width = 'w-full', height = 'h-4' }) {
  return (
    <motion.div
      className={`${width} ${height} rounded bg-slate-200`}
      animate={MOTION.continuous.pulse()}
    />
  );
}

/**
 * Floating badge/notification
 */
export function FloatingBadge({ children, delay = 0 }) {
  return (
    <motion.div
      {...MOTION.transitions.slideUpFade(delay)}
      animate={MOTION.continuous.float()}
    >
      {children}
    </motion.div>
  );
}
