import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MOTION } from '../animations/index.jsx';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Pathaways', href: '/pathaways' },
  { label: 'Pods', href: '/pods' },
  { label: 'Chatbot', href: '/chatbot' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur bg-white border-b border-gray-200">
      <div className="h-auto flex w-full items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-gray-900 hover:opacity-80 transition">
          <img src="/src/assets/mentora-logo.svg" alt="Mentora logo" className="logo" />
          <span className="text-xl font-bold text-gray-900">MENTORA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-bold transition-colors relative ${isActive ? 'text-mentora-secondary' : 'text-white/80 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-mentora-secondary rounded-full"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 400, damping: 60 }}
                    />
                  )}
                </motion.span>
              )}
            </NavLink>
          ))}
          <motion.div whileHover={MOTION.hover.lift} whileTap={{ scale: 0.95 }}>
            <Link
              to="/profile"
              className="rounded-full bg-mentora-secondary px-6 py-2.5 text-sm font-bold text-mentora-primary shadow-lg hover:shadow-xl transition hover:bg-mentora-secondary-light"
            >
              Launch Profile
            </Link>
          </motion.div>
        </nav>

        <button
          className="rounded-xl border border-white/30 p-2 md:hidden hover:bg-white/10 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gradient-to-b from-mentora-primary via-mentora-accent to-mentora-secondary"
          >
            <div className="space-y-3 border-t border-mentora-secondary/30 px-6 pb-6 pt-4">
              {navItems.map(({ label, href }, idx) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-bold text-white hover:bg-white/20 transition"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl bg-mentora-secondary px-4 py-3 text-center text-sm font-bold text-mentora-primary hover:bg-mentora-secondary-light transition"
                >
                  Launch Profile
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
