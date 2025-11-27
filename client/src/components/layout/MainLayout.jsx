import { motion } from 'framer-motion';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-mentora-background/30 to-white text-mentora-primary">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(26,95,193,0.12),transparent_65%)]" />
      <NavBar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 container pb-20 pt-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
