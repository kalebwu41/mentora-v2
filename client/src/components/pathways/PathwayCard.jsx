import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, TrendingUp, Briefcase, Wrench, Heart, Palette } from 'lucide-react';

const pathwayIcons = {
  software: Code,
  marketing: TrendingUp,
  business: Briefcase,
  mechanical: Wrench,
  healthcare: Heart,
  design: Palette,
};

export default function PathwayCard({ pathway, onSelect }) {
  const navigate = useNavigate();
  const Icon = pathwayIcons[pathway.id] || Code;

  function handleClick() {
    if (onSelect) onSelect(pathway);
    navigate(`/pathway/${pathway.id}`);
  }

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="w-full rounded-2xl p-8 text-left cursor-pointer transition bg-white border border-mentora-text-dark/[0.08] shadow-card hover:shadow-brand hover:border-mentora-accent/30 group"
      aria-label={`Open ${pathway.title}`}
    >
      {/* Icon Badge */}
      <div className="w-14 h-14 rounded-xl bg-mentora-accent/10 flex items-center justify-center mb-5 group-hover:bg-mentora-accent/20 transition-colors">
        <Icon className="w-7 h-7 text-mentora-accent" />
      </div>

      {/* Pathway ID Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mentora-accent/10 mb-4">
        <span className="text-xs font-bold uppercase tracking-wide text-mentora-accent">{pathway.id}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold text-mentora-text-dark mb-3 leading-tight group-hover:text-mentora-accent transition-colors">
        {pathway.title}
      </h3>

      {/* Mood/Description */}
      <p className="text-base text-mentora-text-on-light font-medium leading-relaxed mb-5">
        {pathway.mood}
      </p>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-sm">
        <span className="font-bold text-mentora-accent">{pathway.steps.length} steps</span>
        <span className="text-mentora-text-on-light">·</span>
        <span className="text-mentora-text-on-light font-medium truncate flex-1">{pathway.deliverable}</span>
      </div>
    </motion.button>
  );
}
