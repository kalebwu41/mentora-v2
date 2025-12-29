import { motion } from 'framer-motion';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';

export default function PodFeed({ feed }) {
  if (feed.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-mentora-accent/10 flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-mentora-accent" />
        </div>
        <p className="text-sm font-medium text-mentora-text-on-light mb-2">
          No activity yet
        </p>
        <p className="text-xs text-mentora-text-on-light opacity-70">
          Be the first to share something with your pod!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feed.map((item, index) => (
        <motion.article
          key={`${item.user}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="rounded-xl border border-mentora-text-dark/[0.08] bg-mentora-neutral-50 p-5 hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-accent flex items-center justify-center text-xl shadow-sm">
                {item.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-mentora-text-dark">
                  {item.user}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-mentora-text-on-light">
                      {tag}
                      {idx < item.tags.length - 1 && <span className="mx-1">•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-mentora-accent/10 text-xs font-semibold text-mentora-accent">
                {item.podId}
              </span>
              <button className="w-8 h-8 rounded-lg hover:bg-white/80 flex items-center justify-center text-mentora-text-on-light transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <p className="text-sm text-mentora-text-on-light leading-relaxed mb-4">
            {item.prompt}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-3 border-t border-mentora-text-dark/[0.05]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-mentora-text-dark/[0.08] bg-white hover:bg-mentora-accent/5 hover:border-mentora-accent/20 text-xs font-semibold text-mentora-text-on-light hover:text-mentora-accent transition-all"
            >
              <Heart className="w-3.5 h-3.5" />
              {item.likes}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-mentora-text-dark/[0.08] bg-white hover:bg-mentora-accent/5 hover:border-mentora-accent/20 text-xs font-semibold text-mentora-text-on-light hover:text-mentora-accent transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              {item.replies} {item.replies === 1 ? 'reply' : 'replies'}
            </motion.button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
