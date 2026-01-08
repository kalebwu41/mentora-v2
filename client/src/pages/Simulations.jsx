import { Link } from 'react-router-dom';
import simulations from '../data/simulations.js';

export default function Simulations() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">Career Simulations</h1>
      <p className="text-gray-600 mb-8">Practice real industry scenarios designed for learners preparing for internships and first jobs.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {simulations.map((s) => (
          <Link
            to={`/simulations/${s.slug}`}
            key={s.slug}
            className="block rounded-xl border border-gray-100 p-5 hover:shadow-lg transition bg-white"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.short}</p>
              </div>
              <div className="text-right text-sm text-gray-400">
                <div>{s.duration}</div>
                <div className="mt-1">{s.difficulty}</div>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-600">
              <strong>Skills:</strong> {s.skills.join(', ')}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
