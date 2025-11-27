import { motion } from 'framer-motion';

export default function PathwayCard({ pathway, onSelect }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      onClick={() => onSelect(pathway)}
      className="glass-panel w-full rounded-3xl p-5 text-left"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-mentora-accent">{pathway.id}</p>
      <h3 className="mt-2 text-lg font-semibold">{pathway.title}</h3>
      <p className="mt-2 text-sm text-mentora-muted">{pathway.mood}</p>
      <p className="mt-4 text-xs font-semibold text-mentora-muted">{pathway.steps.length} steps · {pathway.deliverable}</p>
    </motion.button>
  );
}
