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
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mentora-teal/20 text-mentora-teal font-display text-2xl">
            M
          </span>
          Mentora
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-mentora-teal' : 'text-mentora-navy/70 hover:text-mentora-teal'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/profile"
            className="rounded-full bg-mentora-navy px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-mentora-teal"
          >
            Launch Profile
          </Link>
        </nav>

        <button
          className="rounded-xl border border-mentora-navy/10 p-2 md:hidden"
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
            <div className="space-y-3 border-t border-white/60 bg-white px-6 pb-6 pt-4">
              {navItems.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    pathname === href ? 'bg-mentora-teal/10 text-mentora-teal' : 'text-mentora-navy/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-mentora-navy px-4 py-3 text-center text-sm font-semibold text-white"
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
