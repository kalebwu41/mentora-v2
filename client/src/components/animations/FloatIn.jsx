import { motion } from 'framer-motion';

export default function FloatIn({ children, delay = 0, direction = 'left' }) {
  const startX = direction === 'left' ? -80 : 80;
  return (
    <motion.div
      initial={{ opacity: 0, x: startX, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
