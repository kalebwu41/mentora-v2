import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Roadmap Engine', href: '/roadmap' },
  { label: 'Pathaways', href: '/pathaways' },
  { label: 'Pods', href: '/pods' },
  { label: 'Chatbot', href: '/chatbot' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold">Mentora</p>
          <p className="text-sm text-mentora-navy/70">AI-driven career blueprints for ambitious students.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-mentora-navy/70">
          {footerLinks.map((link) => (
            <Link key={link.href} to={link.href} className="transition hover:text-mentora-teal">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
