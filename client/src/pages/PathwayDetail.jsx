import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
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
      <div className="w-full min-h-screen bg-gradient-neutral py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08] text-center">
            <p className="text-lg text-mentora-text-on-light mb-6">Pathway not found.</p>
            <Link
              to="/pathaways"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mentora-accent text-white font-bold rounded-lg hover:bg-mentora-accent-bright focus:outline-none focus:ring-4 focus:ring-mentora-accent/30 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Pathways
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-neutral py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/pathaways"
            className="inline-flex items-center gap-2 text-sm font-semibold text-mentora-text-on-light hover:text-mentora-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Pathways
          </Link>
        </motion.div>

        {!started && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Pathway Overview Card */}
            <div className="bg-white rounded-2xl p-10 shadow-card border border-mentora-text-dark/[0.08]">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mentora-accent/10 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-mentora-accent">{pathway.id}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-mentora-text-dark mb-4 leading-tight">
                    {pathway.title}
                  </h1>
                  <p className="text-xl text-mentora-text-on-light font-semibold leading-relaxed mb-6">
                    {pathway.mood}
                  </p>
                  <p className="text-base text-mentora-text-on-light font-medium leading-relaxed">
                    {pathway.deliverable}
                  </p>
                </div>

                {progress && (
                  <div className="ml-8 text-right">
                    <p className="text-sm font-semibold text-mentora-text-on-light mb-2">Your Progress</p>
                    <p className="text-3xl font-extrabold text-mentora-accent mb-2">
                      {progress.submittedSteps}/{progress.totalSteps}
                    </p>
                    <div className="h-2 w-32 rounded-full bg-mentora-text-dark/[0.08]">
                      <div
                        className="h-full rounded-full bg-mentora-accent transition-all duration-500"
                        style={{ width: `${progress.percentComplete}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={() => setStarted(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-mentora-accent text-white text-lg font-bold rounded-xl hover:bg-mentora-accent-bright focus:outline-none focus:ring-4 focus:ring-mentora-accent/30 transition-all shadow-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  {progress && progress.submittedSteps > 0 ? 'Continue Pathway' : 'Begin Pathway'}
                </motion.button>
                <Link
                  to="/pathaways"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white border-2 border-mentora-text-dark/[0.12] text-mentora-text-dark text-lg font-bold rounded-xl hover:border-mentora-accent hover:text-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all"
                >
                  Explore Others
                </Link>
              </div>
            </div>

            {/* Steps Preview */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08]">
              <h2 className="text-2xl font-extrabold text-mentora-text-dark mb-6">Pathway Steps</h2>
              <div className="space-y-4">
                {pathway.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-6 p-6 rounded-xl bg-mentora-neutral-50 border border-mentora-text-dark/[0.08]"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-mentora-accent/10 flex items-center justify-center">
                        <span className="text-lg font-extrabold text-mentora-accent">{idx + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-mentora-text-dark mb-2">{step.title}</h3>
                      <p className="text-sm text-mentora-text-on-light font-medium leading-relaxed mb-3">
                        {step.description}
                      </p>
                      {step.deliverable && (
                        <p className="text-xs text-mentora-text-on-light font-semibold">
                          <span className="text-mentora-accent">Deliverable:</span> {step.deliverable}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {started && (
          <PathwayFlow
            pathway={pathway}
            onComplete={(summary) => {
              console.log('pathway complete', summary);
            }}
          />
        )}
      </div>
    </div>
  );
}
