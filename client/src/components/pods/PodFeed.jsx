import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

export default function PodFeed({ feed }) {
  return (
    <div className="space-y-4">
      {feed.map((item, index) => (
        <motion.div
          key={`${item.user}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
            className="rounded-3xl border border-mentora-primary/10 bg-white/80 p-5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mentora-accent/10 text-xl">
                {item.avatar}
              </span>
              <div>
                <p className="text-sm font-semibold">{item.user}</p>
                  <p className="text-xs text-mentora-muted">{item.tags.join(' • ')}</p>
              </div>
            </div>
              <span className="rounded-full bg-mentora-accent/10 px-3 py-1 text-xs font-semibold text-mentora-accent">
              {item.podId}
            </span>
          </div>
          <p className="mt-4 text-sm text-mentora-muted">{item.prompt}</p>
          <div className="mt-4 flex gap-3 text-xs font-semibold text-mentora-muted">
            <button className="flex items-center gap-1 rounded-full border border-mentora-primary/10 px-3 py-1">
              <Heart size={14} /> {item.likes}
            </button>
            <button className="flex items-center gap-1 rounded-full border border-mentora-primary/10 px-3 py-1">
              <MessageCircle size={14} /> {item.replies} replies
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
