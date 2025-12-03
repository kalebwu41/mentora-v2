import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, children, className = '', onClick, variant = 'solid' }) {
  const base = 'btn inline-flex items-center justify-center gap-2';
  const solid = 'bg-[var(--primary)] text-white';
  const outline = 'bg-transparent border border-gray-200 text-[var(--primary)]';

  const classes = `${base} ${variant === 'outline' ? outline : solid} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
