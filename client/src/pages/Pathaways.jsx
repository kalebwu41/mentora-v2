import { Link } from 'react-router-dom';
import { pathawayCatalog } from '../data/pathaways.js';
import PathwayIndexCard from '../components/pathways/PathwayIndexCard.jsx';

export default function Pathaways() {
  const pathwaysCount = pathawayCatalog.length;
  const totalSteps = pathawayCatalog.reduce((acc, p) => acc + (Array.isArray(p.steps) ? p.steps.length : 0), 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-8 lg:grid-cols-[260px,1fr]">

        {/* Sidebar */}
        <aside>
          <h2 className="text-sm font-semibold text-gray-700 mb-4">YOUR PATHWAYS</h2>

          <nav className="space-y-2 mb-6">
            <Link to="/pathaways" className="block text-sm text-gray-700 hover:text-gray-900">All Pathways</Link>
            {pathawayCatalog.map((p) => (
              <Link key={p.id} to={`/pathway/${p.id}`} className="block text-sm text-gray-600 hover:text-gray-900">
                {p.title}
              </Link>
            ))}
          </nav>

          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h3 className="text-xs font-medium text-gray-500">YOUR PROGRESS</h3>
            <div className="mt-3 grid gap-3">
              <div className="text-sm text-gray-900 font-semibold">{pathwaysCount} Pathways</div>
              <div className="text-sm text-gray-700">{totalSteps} Skills & Projects</div>
              <div className="text-sm text-gray-700">0 Certifications</div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main>
          <header className="mb-6">
            <h1 className="text-3xl font-extrabold text-gray-900">Career Pathways</h1>
            <p className="mt-2 text-sm text-gray-600">Explore structured career paths built around real-world skills.</p>
          </header>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Explore Pathways</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pathawayCatalog.map((p) => (
                <div key={p.id}>
                  <PathwayIndexCard pathway={p} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/pathway/software" className="inline-block px-4 py-2 bg-gray-50 border rounded text-sm text-gray-700 hover:bg-gray-100">Start Project</Link>
              <Link to="/pathway/software" className="inline-block px-4 py-2 bg-gray-50 border rounded text-sm text-gray-700 hover:bg-gray-100">Take Assessment</Link>
              <Link to="/pods" className="inline-block px-4 py-2 bg-gray-50 border rounded text-sm text-gray-700 hover:bg-gray-100">Join Study Group</Link>
              <Link to="/pods" className="inline-block px-4 py-2 bg-gray-50 border rounded text-sm text-gray-700 hover:bg-gray-100">Find Mentor</Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
