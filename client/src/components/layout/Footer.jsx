import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MOTION } from '../animations/index.jsx';

const footerLinks = [
  { label: 'Roadmap Engine', href: '/roadmap' },
  { label: 'Pathaways', href: '/pathaways' },
  { label: 'Pods', href: '/pods' },
  { label: 'Chatbot', href: '/chatbot' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <motion.div
        className="container flex w-full flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ x: 4 }}
        >
          <img src="/src/assets/mentora-logo.svg" alt="Mentora logo" className="logo" />
          <div>
            <p className="text-lg font-semibold">Mentora</p>
            <p className="text-sm text-mentora-muted">AI-driven career blueprints for ambitious students.</p>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-mentora-muted">
          {footerLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={link.href}
                className="transition hover:text-mentora-accent"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
