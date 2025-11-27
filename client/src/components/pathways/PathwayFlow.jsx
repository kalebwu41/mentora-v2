import { useEffect } from 'react';
import { motion } from 'framer-motion';
import usePathaway from '../../hooks/usePathaway.js';

export default function PathwayFlow({ pathway, onComplete }) {
  const { currentStep, choose, selections, completed, summary, reset } = usePathaway(pathway);

  useEffect(() => {
    if (completed && summary && onComplete) {
      onComplete(summary);
    }
  }, [completed, summary, onComplete]);

  return (
    <div className="glass-panel rounded-3xl p-6 space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-mentora-accent">Active Pathaway</p>
        <h2 className="text-2xl font-semibold">{pathway.title}</h2>
        <p className="text-sm text-mentora-muted">{pathway.mood}</p>
      </div>

      {!completed && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-mentora-muted">
            <span>Step {selections.length + 1}/{pathway.steps.length}</span>
            <span>{Math.round((selections.length / pathway.steps.length) * 100)}% complete</span>
          </div>
          <div className="h-2 rounded-full bg-mentora-primary/10">
            <div
              className="h-full rounded-full bg-mentora-accent transition-all"
              style={{ width: `${(selections.length / pathway.steps.length) * 100}%` }}
            />
          </div>
          <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold text-mentora-accent">{currentStep.title}</p>
            <p className="mt-2 text-sm text-mentora-muted">{currentStep.description}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {currentStep.choices.map((choice) => (
                <button
                  key={choice.label}
                  onClick={() => choose(choice)}
                  className="rounded-2xl border border-mentora-primary/10 px-3 py-4 text-left text-sm transition hover:border-mentora-accent"
                >
                  <p className="font-semibold">{choice.label}</p>
                  <p className="text-xs text-mentora-muted">{choice.skill}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {completed && summary && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <div className="rounded-3xl bg-white/90 p-6 text-center">
            <p className="text-sm font-semibold text-mentora-accent">{summary.tier} Tier</p>
            <p className="text-4xl font-bold text-mentora-primary">{summary.score}</p>
            <p className="mt-2 text-sm text-mentora-muted">{summary.reflection}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
              {summary.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-mentora-accent/15 px-3 py-1 text-mentora-accent">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-mentora-primary/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-mentora-muted">Decision Trail</p>
            <ul className="mt-3 space-y-2 text-sm text-mentora-muted">
              {summary.trail?.map((item) => (
                <li key={item.title} className="flex items-center justify-between rounded-2xl bg-white/60 px-3 py-2">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-xs text-mentora-accent">{item.delta > 0 ? `+${item.delta}` : item.delta} pts</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-full btn"
          >
            Run Pathaway again
          </button>
        </motion.div>
      )}
    </div>
  );
}
