import { useState } from 'react';
import toast from 'react-hot-toast';
import { pathawayCatalog } from '../data/pathaways.js';
import PathwayCard from '../components/pathways/PathwayCard.jsx';
import PathwayFlow from '../components/pathways/PathwayFlow.jsx';
import { syncPathawayResult } from '../services/api.js';
import { useUser } from '../context/UserContext.jsx';

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
        {pathawayCatalog.map((pathway) => (
          <PathwayCard key={pathway.id} pathway={pathway} onSelect={setSelected} />
        ))}
        {latest && (
          <div className="rounded-3xl bg-white/80 p-4 text-sm">
            <p className="text-xs uppercase tracking-wide text-mentora-teal">Latest score</p>
            <p className="text-2xl font-bold">{latest.score}</p>
            <p className="text-sm text-mentora-navy/70">{latest.reflection}</p>
          </div>
        )}
      </aside>
      <PathwayFlow key={selected.id} pathway={selected} onComplete={handleComplete} />
    </div>
  );
}
