import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Roadmap Engine', href: '/roadmap' },
  { label: 'Pathaways', href: '/pathaways' },
  { label: 'Pods', href: '/pods' },
  { label: 'Chatbot', href: '/chatbot' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container flex w-full flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img src="/src/assets/mentora-logo.svg" alt="Mentora logo" className="logo" />
          <div>
            <p className="text-lg font-semibold">Mentora</p>
            <p className="text-sm text-mentora-muted">AI-driven career blueprints for ambitious students.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-mentora-muted">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="transition hover:text-mentora-accent">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
