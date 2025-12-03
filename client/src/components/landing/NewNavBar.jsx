import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Roadmaps', href: '/roadmap' },
  { label: 'Pathways', href: '/pathaways' },
  { label: 'Pods', href: '/pods' },
  { label: 'Chatbot', href: '/chatbot' },
  { label: 'Dashboard', href: '/dashboard' },
];

const MOTION = {
  nav: { type: 'spring', stiffness: 300, damping: 30 },
  hover: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
};

export default function NewNavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-mentora-primary border-b border-white/[0.08] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="text-[28px] font-serif font-bold bg-gradient-to-r from-mentora-accent to-mentora-accent-bright bg-clip-text text-transparent"
          >
            Mentora
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-white/75 text-[15px] font-medium transition-colors duration-200 hover:text-white relative group"
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-1/2 h-[2px] bg-mentora-accent"
                initial={{ width: 0, x: '-50%' }}
                whileHover={{ width: '100%' }}
                transition={MOTION.hover}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/profile"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-[10px] bg-mentora-accent text-mentora-primary font-semibold text-[14px] hover:bg-mentora-accent-bright transition-all duration-200 shadow-button hover:shadow-button-hover"
            >
              Launch Profile
              <span className="text-base">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mentora-primary/95 border-t border-white/[0.08] backdrop-blur-md"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/80 text-sm font-medium py-2 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-3 border-t border-white/10"
              >
                <Link
                  to="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-lg bg-mentora-accent text-mentora-primary font-semibold text-sm hover:bg-mentora-accent-bright transition-colors"
                >
                  Launch Profile →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
