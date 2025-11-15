import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';
import { mentorReply } from '../../utils/ai.js';

export default function ChatInterface({ context, prefill }) {
  const [messages, setMessages] = useState([
    { role: 'mentor', text: 'Hey Ari! Ready to align your roadmap with today’s energy?' },
  ]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (prefill) {
      setDraft(prefill);
    }
  }, [prefill]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  async function handleSend(e) {
    e?.preventDefault();
    if (!draft.trim()) return;
    const input = draft.trim();
    setDraft('');
    setMessages((prev) => [...prev, { role: 'student', text: input }]);
    setTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const reply = mentorReply(input, context);
    setMessages((prev) => [...prev, { role: 'mentor', text: reply }]);
    setTyping(false);
  }

  return (
    <div className="glass-panel flex h-full flex-col rounded-3xl p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-teal/15 text-2xl">🤖</span>
        <div>
          <p className="text-lg font-semibold">Mentora Coach</p>
          <p className="text-xs uppercase tracking-wide text-mentora-navy/60">Context-aware guidance</p>
        </div>
      </div>

      <div ref={containerRef} className="flex-1 space-y-4 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <motion.div
            key={`message-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.role === 'student' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`rounded-3xl px-4 py-3 text-sm shadow-sm ${
                message.role === 'student' ? 'bg-mentora-teal text-white rounded-br-sm' : 'bg-white/80 text-mentora-navy rounded-bl-sm'
              }`}
            >
              {message.text}
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              className="flex items-center gap-2 text-sm text-mentora-navy/60"
            >
              <Loader2 className="h-4 w-4 animate-spin text-mentora-teal" />
              Mentor is typing…
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSend} className="mt-4 flex items-center gap-3">
        <input
          className="flex-1 rounded-3xl border border-mentora-navy/10 bg-white/80 px-4 py-3 text-sm focus:border-mentora-teal focus:outline-none"
          placeholder="Reflect, ask for tactics, or debrief a Pod moment…"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-mentora-navy px-5 py-3 text-sm font-semibold text-white hover:bg-mentora-teal"
        >
          <Sparkles size={16} /> Send
        </button>
      </form>
    </div>
  );
}
