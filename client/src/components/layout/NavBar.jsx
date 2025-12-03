import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MOTION } from '../animations/index.jsx';
import mentoraLogo from '../../assets/mentora-logo.svg';

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
    <header className="sticky top-0 z-30 w-full bg-white border-b border-gray-200">
      <div className="h-auto flex w-full items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#0A1628] hover:opacity-80 transition">
          <motion.img
            src={mentoraLogo}
            alt="Mentora logo"
            className="h-10 w-10"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
          <span className="text-xl font-bold text-[#0A1628]">MENTORA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-bold transition-colors relative ${isActive ? 'text-[#1E5EFF]' : 'text-[#0A1628]/70 hover:text-[#0A1628]'}`
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
                      className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E5EFF] rounded-full"
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
              className="rounded-full bg-[#1E5EFF] px-6 py-2.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:bg-[#3B72FF] transition"
            >
              Launch Profile
            </Link>
          </motion.div>
        </nav>

        <button
          className="rounded-xl border border-[#0A1628]/20 p-2 md:hidden hover:bg-[#0A1628]/5 transition"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} className="text-[#0A1628]" /> : <Menu size={18} className="text-[#0A1628]" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-200"
          >
            <div className="space-y-3 px-6 pb-6 pt-4">
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
                    className="block rounded-xl px-4 py-3 text-sm font-bold text-[#0A1628] hover:bg-gray-100 transition"
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
                  className="block rounded-xl bg-[#1E5EFF] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#3B72FF] transition"
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
