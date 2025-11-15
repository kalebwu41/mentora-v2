import { motion } from 'framer-motion';

export default function StatCard({ title, metric, trend, icon, accent = 'bg-mentora-teal/15' }) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      className="glass-panel flex flex-col gap-2 rounded-3xl p-5"
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>{icon}</div>
        <div>
          <p className="text-sm font-medium text-mentora-navy/70">{title}</p>
          <p className="text-2xl font-semibold text-mentora-navy">{metric}</p>
        </div>
      </div>
      {trend && <p className="text-xs font-semibold text-mentora-teal">{trend}</p>}
    </motion.div>
  );
}
