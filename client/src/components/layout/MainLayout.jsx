import { motion } from 'framer-motion';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full text-[var(--text-primary)] overflow-x-hidden" style={{ background: 'var(--background)' }}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px]" style={{ background: 'radial-gradient(circle at top, rgba(30,94,255,0.03), transparent 65%)' }} />
      <NavBar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full pb-20 pt-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
