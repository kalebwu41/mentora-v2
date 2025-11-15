import { useState } from 'react';
import { motion } from 'framer-motion';

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
      className="glass-panel rounded-3xl p-6 space-y-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <label className="text-sm font-semibold text-mentora-navy/70">
          Pod
          <select
            className="mt-1 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-3 py-2"
            value={draft.podId}
            onChange={(e) => setDraft((prev) => ({ ...prev, podId: e.target.value }))}
          >
            {pods.map((pod) => (
              <option key={pod.id} value={pod.id}>
                {pod.title}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-mentora-navy/70">
          Tag
          <select
            className="mt-1 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-3 py-2"
            value={draft.tag}
            onChange={(e) => setDraft((prev) => ({ ...prev, tag: e.target.value }))}
          >
            {['Feedback', 'Critique', 'Win', 'Support'].map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
        </label>
      </div>
      <textarea
        className="min-h-[120px] w-full rounded-3xl border border-mentora-navy/10 bg-white/80 px-4 py-3 text-sm focus:border-mentora-teal focus:outline-none"
        placeholder="Ask the pod for critique, share a win, or upload context..."
        value={draft.prompt}
        onChange={(e) => setDraft((prev) => ({ ...prev, prompt: e.target.value }))}
      />
      <button
        type="submit"
        className="w-full rounded-full bg-mentora-navy py-3 text-sm font-semibold text-white hover:bg-mentora-teal"
      >
        Publish to Pod
      </button>
    </motion.form>
  );
}
