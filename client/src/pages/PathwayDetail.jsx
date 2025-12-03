import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pathawayCatalog } from '../data/pathaways.js';
import useSubmissionStatus from '../hooks/useSubmissionStatus.js';
import PathwayFlow from '../components/pathways/PathwayFlow.jsx';

export default function PathwayDetail() {
  const { id } = useParams();
  const [pathway, setPathway] = useState(null);
  const [started, setStarted] = useState(false);
  const { getPathwayProgress } = useSubmissionStatus();
  const progress = pathway ? getPathwayProgress(id, pathway.steps.length) : null;

  useEffect(() => {
    const found = pathawayCatalog.find((p) => p.id === id);
    setPathway(found || null);
    setStarted(false);
  }, [id]);

  if (!pathway) {
    return (
      <div className="glass-panel p-6 rounded-3xl bg-[var(--surface)] border border-[var(--accent)]/20">
        <p className="text-sm text-[var(--text-secondary)]">Pathway not found.</p>
        <Link to="/pathaways" className="mt-4 inline-block btn">Back to Pathaways</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">Pathway</p>
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">{pathway.title}</h1>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{pathway.mood}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {progress && (
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{progress.submittedSteps} of {progress.totalSteps} steps</p>
              <div className="h-2 w-32 rounded-full bg-[var(--accent)]/10 mt-1">
                <div
                  className="h-full rounded-full bg-[var(--accent)] transition-all"
                  style={{ width: `${progress.percentComplete}%` }}
                />
              </div>
            </div>
          )}
          <Link to="/pathaways" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)]">Back</Link>
        </div>
      </div>

      {!started && (
        <div className="rounded-2xl bg-[var(--surface)] p-6 border border-[var(--accent)]/20">
          <p className="text-sm text-[var(--text-secondary)]">{pathway.deliverable}</p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => setStarted(true)} className="btn">Begin</button>
            <Link to="/pathaways" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition">Return</Link>
          </div>
        </div>
      )}

      {started && (
        <PathwayFlow pathway={pathway} onComplete={(summary) => {
          // For now we simply console.log — server integration later
          console.log('pathway complete', summary);
        }} />
      )}
    </motion.div>
  );
}
