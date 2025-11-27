import { motion } from 'framer-motion';

export default function StatCard({ title, metric, trend, icon, accent = 'bg-mentora-accent/15' }) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="glass-panel flex flex-col gap-2 rounded-3xl p-5"
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>{icon}</div>
        <div>
          <p className="text-sm font-medium text-mentora-muted">{title}</p>
          <p className="text-2xl font-semibold text-mentora-primary">{metric}</p>
        </div>
      </div>
      {trend && <p className="text-xs font-semibold text-mentora-accent">{trend}</p>}
    </motion.div>
  );
}
