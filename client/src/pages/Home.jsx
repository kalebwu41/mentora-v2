import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import StatCard from '../components/ui/StatCard.jsx';
import Chip from '../components/ui/Chip.jsx';

const heroStats = [
  { title: 'Roadmaps shipped', metric: '4,200+', trend: '+320 this week', icon: '🗺️' },
  { title: 'Pods active now', metric: '128', trend: '24 live critiques', icon: '🧠' },
  { title: 'Pathaway plays', metric: '18,940', trend: '+9% completion', icon: '🎯' },
];

const pillars = [
  {
    title: 'AI Roadmap Engine',
    body: 'Mentora weaves passions, local demand, and strengths into a multi-year plan with weekly rituals.',
  },
  {
    title: 'Pathaways',
    body: 'Branching simulations that feel like internships—score decisions, collect mentor feedback, ship deliverables.',
  },
  {
    title: 'Pods',
    body: 'Guided professional rooms blending peer critique, industry mentors, and AI insights.',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <Chip label="YC-grade EdTech" icon="✨" tone="sand" />
          <h1 className="text-4xl font-semibold text-mentora-navy">
            Build a career blueprint with mentors, AI, and action.
          </h1>
          <p className="text-lg text-mentora-navy/70">
            Mentora blends AI copilots with human Pods so every student can explore industries, design Pathaways, and stay accountable on a multi-year journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 rounded-full bg-mentora-navy px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-mentora-teal"
            >
              Launch AI Roadmap <ArrowRight size={16} />
            </Link>
            <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm font-semibold text-mentora-navy/70">
              View Student Dashboard <Compass size={16} />
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="glass-panel rounded-3xl p-6">
            <p className="text-sm font-semibold text-mentora-teal">Live Pulse</p>
            <p className="mt-1 text-2xl font-semibold">Mentora coaches flowing from Pods → Pathaways.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {heroStats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </div>
          </div>
          <div className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-3xl p-6">
            <div>
              <p className="text-sm font-semibold text-mentora-teal">Trusted by ambitious schools</p>
              <p className="text-lg font-semibold">“Mentora feels like a chief-of-staff for every student.”</p>
            </div>
            <Sparkles className="text-mentora-teal" size={36} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="glass-panel h-full rounded-3xl p-6">
            <p className="text-xs uppercase tracking-wide text-mentora-teal">{pillar.title}</p>
            <p className="mt-2 text-sm text-mentora-navy/70">{pillar.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
