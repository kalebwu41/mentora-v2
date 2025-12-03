import { motion } from 'framer-motion';
import Timeline from '../ui/Timeline.jsx';
import Chip from '../ui/Chip.jsx';
import { Target, Briefcase, Calendar, TrendingUp, MapPin } from 'lucide-react';

export default function RoadmapCanvas({ data }) {
  if (!data) {
    return (
      <motion.div
        className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-12 text-center shadow-card min-h-[600px] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-20 h-20 rounded-full bg-mentora-accent/10 flex items-center justify-center mb-6">
          <Target className="w-10 h-10 text-mentora-accent" />
        </div>
        <h3 className="text-xl font-bold text-mentora-text-dark mb-3">
          Your roadmap awaits
        </h3>
        <p className="text-sm text-mentora-text-on-light max-w-md">
          Complete the form to generate your personalized career blueprint with AI-powered insights and recommendations.
        </p>
      </motion.div>
    );
  }

  const heroScore =
    typeof data.hero.score === 'object'
      ? data.hero.score
      : {
          normalized: data.hero.score || 72,
          color: 'text-mentora-accent',
          narrative: 'Keep pairing Pods + Pathaways to stretch your craft.',
        };

  const traits = data.hero.archetypeDetails?.traits || ['Curiosity', 'Systems', 'Momentum'];
  const internships = data.opportunities?.internships || [];
  const cadenceBlocks = data.cadence || [];
  const marketSignals = data.market || [];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Hero Insight Card */}
      <div className="bg-gradient-accent rounded-2xl p-8 text-white shadow-brand">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Mentora Insight</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight mb-3">
              {data.hero.statement}
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-white/20">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black">{heroScore.normalized}%</span>
            <span className="text-sm font-semibold opacity-90">Match Score</span>
          </div>
          <p className="text-sm font-medium opacity-90 max-w-md">
            {heroScore.narrative}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-sm font-semibold"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Multi-year Blueprint & Additional Info */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Multi-year Blueprint */}
        <div className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-6 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-mentora-accent/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-mentora-accent" />
              </div>
              <h3 className="text-lg font-bold text-mentora-text-dark">Multi-year Blueprint</h3>
            </div>
            <span className="text-xs font-bold text-mentora-accent uppercase tracking-wider px-3 py-1 rounded-full bg-mentora-accent/10">
              Grades 9–12
            </span>
          </div>
          <div className="mt-6">
            <Timeline items={data.blueprint} />
          </div>
        </div>

        {/* Opportunities & Cadence */}
        <div className="space-y-6">
          {/* Opportunities */}
          <div className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-mentora-text-dark">Opportunities</h4>
            </div>
            <div className="space-y-3">
              {internships.length > 0 ? (
                internships.map((opportunity) => (
                  <div
                    key={opportunity.name}
                    className="rounded-xl bg-mentora-neutral-50 p-4 border border-mentora-text-dark/[0.06] hover:border-mentora-accent/30 hover:shadow-md transition-all"
                  >
                    <p className="font-bold text-mentora-text-dark mb-1">{opportunity.name}</p>
                    <p className="text-sm text-mentora-text-on-light font-medium mb-3">
                      {opportunity.format} · {opportunity.duration}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-mentora-accent/10 text-mentora-accent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-mentora-text-on-light">
                  No opportunities available yet
                </p>
              )}
            </div>
          </div>

          {/* Weekly Cadence */}
          <div className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-6 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-mentora-text-dark">Weekly Cadence</h4>
            </div>
            <div className="space-y-3">
              {cadenceBlocks.length > 0 ? (
                cadenceBlocks.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-xl border border-mentora-text-dark/[0.08] p-4 bg-white"
                  >
                    <p className="text-sm font-bold text-mentora-accent mb-1">{block.label}</p>
                    <p className="text-xs text-mentora-text-on-light font-medium">
                      {(block.blocks || []).join(' • ')}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-mentora-text-on-light">
                  No cadence blocks defined yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Market Signals */}
      <div className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-6 shadow-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-orange-600" />
          </div>
          <h4 className="text-lg font-bold text-mentora-text-dark">Market Signals</h4>
        </div>
        {marketSignals.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-3">
            {marketSignals.map((signal) => (
              <div
                key={signal.city}
                className="rounded-xl bg-mentora-neutral-50 p-5 border border-mentora-text-dark/[0.06] hover:border-mentora-accent/30 hover:shadow-md transition-all"
              >
                <p className="text-base font-bold text-mentora-text-dark mb-1">{signal.city}</p>
                <p className="text-xs text-mentora-text-on-light font-medium mb-3">
                  {signal.focus}
                </p>
                <p className="text-2xl font-bold text-mentora-accent">{signal.demand}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-sm text-mentora-text-on-light font-medium">
              Connect to the API to unlock live market intelligence and local demand data.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
