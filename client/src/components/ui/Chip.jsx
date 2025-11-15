import clsx from 'clsx';

export default function Chip({ label, icon, tone = 'teal', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition',
        tone === 'teal' && 'bg-mentora-teal/15 text-mentora-teal hover:bg-mentora-teal/25',
        tone === 'navy' && 'bg-mentora-navy/10 text-mentora-navy hover:bg-mentora-navy/20',
        tone === 'sand' && 'bg-mentora-sand text-mentora-navy hover:bg-mentora-sand/80',
      )}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
