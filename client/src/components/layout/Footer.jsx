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
    <footer className="w-full bg-white border-t border-gray-200">
      <motion.div
        className="w-full flex flex-col gap-8 py-16 px-6 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ x: 4 }}
        >
          <img src="/src/assets/mentora-logo.svg" alt="Mentora logo" className="logo brightness-0 invert w-10 h-10" />
          <div>
            <p className="text-xl font-black text-white">MENTORA</p>
            <p className="text-sm text-mentora-secondary font-semibold">AI-driven career blueprints for ambitious students.</p>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-8 text-sm font-bold text-white/80">
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
                className="transition hover:text-mentora-secondary"
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
