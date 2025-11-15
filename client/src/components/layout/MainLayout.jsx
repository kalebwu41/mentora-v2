import { motion } from 'framer-motion';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-mentora-sky/30 to-white text-mentora-navy">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(53,176,171,0.18),_transparent_65%)]" />
      <NavBar />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-10"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
