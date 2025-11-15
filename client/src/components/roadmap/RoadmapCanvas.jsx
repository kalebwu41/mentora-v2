import Timeline from '../ui/Timeline.jsx';
import Chip from '../ui/Chip.jsx';

export default function RoadmapCanvas({ data }) {
  if (!data) {
    return (
      <div className="glass-panel rounded-3xl p-6 text-center text-sm text-mentora-navy/70">
        Generate a roadmap to see your personalized blueprint.
      </div>
    );
  }

  const heroScore =
    typeof data.hero.score === 'object'
      ? data.hero.score
      : {
          normalized: data.hero.score || 72,
          color: 'text-mentora-teal',
          narrative: 'Keep pairing Pods + Pathaways to stretch your craft.',
        };

  const traits = data.hero.archetypeDetails?.traits || ['Curiosity', 'Systems', 'Momentum'];

  const internships = data.opportunities?.internships || [];
  const cadenceBlocks = data.cadence || [];
  const marketSignals = data.market || [];

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-3xl p-6">
        <p className="text-sm font-semibold text-mentora-teal">Mentora Insight</p>
        <h2 className="mt-2 text-2xl font-semibold text-mentora-navy">{data.hero.statement}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className={`text-3xl font-bold ${heroScore.color}`}>{heroScore.normalized}%</span>
          <p className="text-sm text-mentora-navy/70">{heroScore.narrative}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {traits.map((trait) => (
            <Chip key={trait} label={trait} tone="sand" />
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Multi-year Blueprint</h3>
            <span className="text-xs font-semibold text-mentora-teal uppercase tracking-wider">Grades 9–12</span>
          </div>
          <div className="mt-6">
            <Timeline items={data.blueprint} />
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 space-y-6">
          <section>
            <h4 className="text-sm font-semibold text-mentora-navy/70">Opportunities</h4>
            <div className="mt-3 space-y-3">
              {internships.map((opportunity) => (
                <div key={opportunity.name} className="rounded-2xl bg-white/70 p-4 shadow-sm">
                  <p className="font-semibold">{opportunity.name}</p>
                  <p className="text-sm text-mentora-navy/70">
                    {opportunity.format} · {opportunity.duration}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-mentora-teal">
                    {opportunity.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-mentora-teal/30 px-2 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 className="text-sm font-semibold text-mentora-navy/70">Weekly Cadence</h4>
            <div className="mt-3 space-y-3">
              {cadenceBlocks.map((block) => (
                <div key={block.label} className="rounded-2xl border border-mentora-navy/10 p-4">
                  <p className="text-sm font-semibold text-mentora-teal">{block.label}</p>
                    <p className="text-xs text-mentora-navy/60">{(block.blocks || []).join(' • ')}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

        <div className="glass-panel rounded-3xl p-6">
          <h4 className="text-sm font-semibold text-mentora-navy/70">Market Signals</h4>
          {marketSignals.length ? (
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {marketSignals.map((signal) => (
                <div key={signal.city} className="rounded-2xl bg-white/80 p-4">
                  <p className="text-sm font-semibold">{signal.city}</p>
                  <p className="text-xs text-mentora-navy/60">{signal.focus}</p>
                  <p className="text-lg font-semibold text-mentora-teal mt-2">{signal.demand}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-mentora-navy/60">Connect to the API to unlock live market intel.</p>
          )}
        </div>
    </div>
  );
}
