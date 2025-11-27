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
      <div className="glass-panel p-6 rounded-3xl">
        <p className="text-sm text-mentora-muted">Pathway not found.</p>
        <Link to="/pathaways" className="mt-4 inline-block btn">Back to Pathaways</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-mentora-accent">Pathway</p>
          <h1 className="text-3xl font-bold">{pathway.title}</h1>
          <p className="text-sm text-mentora-muted mt-1">{pathway.mood}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          {progress && (
            <div>
              <p className="text-sm font-semibold">{progress.submittedSteps} of {progress.totalSteps} steps</p>
              <div className="h-2 w-32 rounded-full bg-mentora-primary/10 mt-1">
                <div
                  className="h-full rounded-full bg-mentora-accent transition-all"
                  style={{ width: `${progress.percentComplete}%` }}
                />
              </div>
            </div>
          )}
          <Link to="/pathaways" className="text-sm text-mentora-muted hover:text-mentora-accent">Back</Link>
        </div>
      </div>

      {!started && (
        <div className="rounded-2xl bg-white/80 p-6">
          <p className="text-sm text-mentora-muted">{pathway.deliverable}</p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => setStarted(true)} className="btn">Begin</button>
            <Link to="/pathaways" className="inline-flex items-center gap-2 text-sm font-semibold text-mentora-muted hover:text-mentora-accent transition">Return</Link>
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
