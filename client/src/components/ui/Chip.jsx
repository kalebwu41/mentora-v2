import clsx from 'clsx';

export default function Chip({ label, icon, tone = 'teal', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold transition',
        tone === 'teal' && 'bg-mentora-accent/15 text-mentora-accent hover:bg-mentora-accent/25',
        tone === 'navy' && 'bg-mentora-primary/10 text-mentora-primary hover:bg-mentora-primary/20',
        tone === 'sand' && 'bg-white text-mentora-primary hover:bg-gray-50',
        tone === 'accent' && 'bg-mentora-accent/15 text-mentora-accent',
        tone === 'primary' && 'bg-mentora-primary/10 text-mentora-primary',
      )}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
