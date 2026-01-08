import { Link } from 'react-router-dom';
import { pathawayCatalog } from '../data/pathaways.js';
import PathwayIndexCard from '../components/pathways/PathwayIndexCard.jsx';

export default function Pathaways() {
  const pathwaysCount = pathawayCatalog.length;
  const totalSteps = pathawayCatalog.reduce((acc, p) => acc + (Array.isArray(p.steps) ? p.steps.length : 0), 0);

  return (
    <div className="min-h-screen bg-mentora-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-mentora-text-dark mb-3">
            Career Pathways
          </h1>
          <p className="text-lg text-mentora-text-on-light leading-relaxed">
            Explore structured career paths built around real-world skills.
          </p>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-mentora-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mentora-text-on-light mb-1">Pathways</p>
                <p className="text-3xl font-extrabold text-mentora-accent">{pathwaysCount}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-mentora-accent/10 flex items-center justify-center">
                <span className="text-2xl">🗺️</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-mentora-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mentora-text-on-light mb-1">Skills & Projects</p>
                <p className="text-3xl font-extrabold text-mentora-sky">{totalSteps}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-mentora-sky/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-mentora-neutral-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-mentora-text-on-light mb-1">Certifications</p>
                <p className="text-3xl font-extrabold text-mentora-text-on-light">0</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-mentora-neutral-100 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pathways Grid */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-mentora-text-dark mb-6">
            Explore Pathways
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathawayCatalog.map((p) => (
              <PathwayIndexCard key={p.id} pathway={p} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-xl p-6 shadow-sm border border-mentora-neutral-200">
          <h3 className="text-lg font-bold text-mentora-text-dark mb-5">
            Quick Actions
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/pathway/software"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mentora-accent text-white rounded-lg text-sm hover:bg-mentora-accent-dark transition-all duration-200 font-semibold"
            >
              <span>Start Project</span>
              <span>→</span>
            </Link>
            <Link
              to="/pathway/software"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mentora-sky text-white rounded-lg text-sm hover:bg-mentora-sky/90 transition-all duration-200 font-semibold"
            >
              <span>Take Assessment</span>
              <span>→</span>
            </Link>
            <Link
              to="/pods"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mentora-indigo text-white rounded-lg text-sm hover:bg-mentora-indigo/90 transition-all duration-200 font-semibold"
            >
              <span>Join Study Group</span>
              <span>→</span>
            </Link>
            <Link
              to="/pods"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-mentora-cyan text-white rounded-lg text-sm hover:bg-mentora-cyan/90 transition-all duration-200 font-semibold"
            >
              <span>Find Mentor</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
