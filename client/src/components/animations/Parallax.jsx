import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Parallax({ children, offset = 50 }) {
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setY(window.scrollY * 0.5);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}
