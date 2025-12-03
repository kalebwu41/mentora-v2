import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { podChannels } from '../data/pods.js';
import PodComposer from '../components/pods/PodComposer.jsx';
import PodFeed from '../components/pods/PodFeed.jsx';
import { fetchPodFeed } from '../services/api.js';
import { SectionTitle, StaggerContainer, MOTION } from '../components/animations/index.jsx';

export default function Pods() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchPodFeed();
      setFeed(data);
    }
    load();
  }, []);

  function handlePublish(entry) {
    const payload = {
      ...entry,
      user: 'You',
      avatar: '🌱',
      likes: 0,
      replies: 0,
      tags: [entry.tag],
    };
    setFeed((prev) => [payload, ...prev]);
    toast.success('Shared with the pod!');
  }

  return (
    <div className="space-y-6">
      <SectionTitle title="Pods" subtitle="Learn & grow with your community" />
      <StaggerContainer staggerDelay={0.08}>
        <div className="grid gap-4 md:grid-cols-3">
          {podChannels.map((pod) => (
            <motion.div
              key={pod.id}
              className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] p-5"
              variants={MOTION.staggerContainer(0).children}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(30, 94, 255, 0.15)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">{pod.title}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{pod.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--text-secondary)]">
                {pod.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="rounded-full bg-[var(--accent)]/10 px-2 py-1 text-[var(--accent)]"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">Activity: {pod.activity}%</p>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
      <motion.div
        className="grid gap-6 lg:grid-cols-[360px,_1fr]"
        {...MOTION.transitions.slideUpFade(0.15)}
      >
        <PodComposer pods={podChannels} onPublish={handlePublish} />
        <PodFeed feed={feed} />
      </motion.div>
    </div>
  );
}
