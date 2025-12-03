import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function PodComposer({ pods, onPublish }) {
  const [draft, setDraft] = useState({
    podId: pods[0]?.id,
    prompt: '',
    tag: 'Feedback',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!draft.prompt.trim()) return;
    onPublish(draft);
    setDraft((prev) => ({ ...prev, prompt: '' }));
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-4">
        Share with Pod
      </h2>

      <div className="space-y-4">
        {/* Pod Selector */}
        <div>
          <label className="block text-xs font-semibold text-mentora-text-on-light uppercase tracking-wide mb-2">
            Select Pod
          </label>
          <select
            className="w-full rounded-lg border border-mentora-text-dark/[0.08] bg-white px-4 py-2.5 text-sm font-medium text-mentora-text-dark focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20 transition-all"
            value={draft.podId}
            onChange={(e) => setDraft((prev) => ({ ...prev, podId: e.target.value }))}
          >
            {pods.map((pod) => (
              <option key={pod.id} value={pod.id}>
                {pod.title}
              </option>
            ))}
          </select>
        </div>

        {/* Tag Selector */}
        <div>
          <label className="block text-xs font-semibold text-mentora-text-on-light uppercase tracking-wide mb-2">
            Tag
          </label>
          <div className="grid grid-cols-2 gap-2">
            {['Feedback', 'Critique', 'Win', 'Support'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setDraft((prev) => ({ ...prev, tag }))}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  draft.tag === tag
                    ? 'bg-mentora-accent text-white'
                    : 'bg-mentora-neutral-50 text-mentora-text-on-light hover:bg-mentora-neutral-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-xs font-semibold text-mentora-text-on-light uppercase tracking-wide mb-2">
            Your Message
          </label>
          <textarea
            className="w-full rounded-lg border border-mentora-text-dark/[0.08] bg-white px-4 py-3 text-sm text-mentora-text-dark placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-2 focus:ring-mentora-accent/20 transition-all resize-none"
            placeholder="Share your thoughts, ask for feedback, or celebrate a win..."
            value={draft.prompt}
            onChange={(e) => setDraft((prev) => ({ ...prev, prompt: e.target.value }))}
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-mentora-accent text-white font-semibold text-sm hover:bg-mentora-accent-bright transition-all duration-200 shadow-button hover:shadow-button-hover disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!draft.prompt.trim()}
        >
          <Send className="w-4 h-4" />
          Publish to Pod
        </motion.button>
      </div>
    </motion.form>
  );
}
