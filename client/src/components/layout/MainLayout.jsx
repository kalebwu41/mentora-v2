import { motion } from 'framer-motion';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(44,82,130,0.05),transparent_65%)]" />
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
