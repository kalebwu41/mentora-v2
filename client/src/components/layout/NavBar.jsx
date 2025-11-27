import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="container flex w-full items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-mentora-primary">
          <img src="/src/assets/mentora-logo.svg" alt="Mentora logo" className="logo" />
          <span className="text-xl font-bold">Mentora</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-mentora-accent' : 'text-mentora-primary/80 hover:text-mentora-accent'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/profile"
            className="rounded-full bg-mentora-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-mentora-accent"
          >
            Launch Profile
          </Link>
        </nav>

        <button
          className="rounded-xl border border-gray-200 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="space-y-3 border-t border-gray-100 bg-white px-6 pb-6 pt-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    pathname === href ? 'bg-mentora-accent/10 text-mentora-accent' : 'text-mentora-primary/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-mentora-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Launch Profile
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
