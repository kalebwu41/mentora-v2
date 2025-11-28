import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { pathawayCatalog } from '../data/pathaways.js';
import PathwayCard from '../components/pathways/PathwayCard.jsx';
import PathwayFlow from '../components/pathways/PathwayFlow.jsx';
import { syncPathawayResult } from '../services/api.js';
import { useUser } from '../context/UserContext.jsx';
import { StaggerContainer, SectionTitle } from '../components/animations/index.jsx';
import MOTION from '../utils/motionConfig.js';

export default function Pathaways() {
  const [selected, setSelected] = useState(pathawayCatalog[0]);
  const [latest, setLatest] = useState(null);
  const { updateUser } = useUser();

  async function handleComplete(summary) {
    setLatest(summary);
    await syncPathawayResult({ summary, pathwayId: selected.id });
    updateUser({ recentPathaway: summary });
    toast.success('Pathaway reflection saved to Pods.');
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[320px,_1fr]">
      <aside className="space-y-4">
        <SectionTitle>
          <h2 className="text-xl font-bold text-mentora-primary">Pathways</h2>
        </SectionTitle>
        <StaggerContainer delay={0.08}>
          {pathawayCatalog.map((pathway) => (
            <motion.div key={pathway.id} variants={MOTION.staggerChild}>
              <PathwayCard pathway={pathway} onSelect={setSelected} />
            </motion.div>
          ))}
        </StaggerContainer>
        {latest && (
          <motion.div
            className="rounded-3xl bg-white/80 p-4 text-sm"
            {...MOTION.transitions.slideUpFade()}
            whileHover={MOTION.hover.lift}
          >
            <p className="text-xs uppercase tracking-wide text-mentora-accent">Latest score</p>
            <p className="text-2xl font-bold">{latest.score}</p>
            <p className="text-sm text-mentora-muted">{latest.reflection}</p>
          </motion.div>
        )}
      </aside>
      <motion.div key={selected.id} {...MOTION.transitions.slideUpFade()}>
        <PathwayFlow pathway={selected} onComplete={handleComplete} />
      </motion.div>
    </div>
  );
}
