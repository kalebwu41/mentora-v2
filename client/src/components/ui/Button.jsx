import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, children, className = '', onClick, variant = 'solid' }) {
  const base = 'btn inline-flex items-center justify-center gap-2';
  const solid = 'bg-mentora-accent hover:bg-mentora-accent-bright text-white shadow-button hover:shadow-button-hover';
  const outline = 'bg-transparent border-2 border-mentora-accent text-mentora-accent hover:bg-mentora-accent/10 hover:border-mentora-accent-bright';

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
