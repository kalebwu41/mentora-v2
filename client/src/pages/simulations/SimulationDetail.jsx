import { useParams, Link } from 'react-router-dom';
import simulations from '../../data/simulations.js';

export default function SimulationDetail() {
  const { slug } = useParams();
  const sim = simulations.find((s) => s.slug === slug);

  if (!sim) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold">Simulation not found</h2>
        <p className="mt-4">Try browsing the <Link to="/simulations" className="text-blue-600">simulations portal</Link>.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Link to="/simulations" className="text-sm text-gray-500 hover:underline">← Back to simulations</Link>
      <h1 className="text-3xl font-bold mt-4">{sim.title}</h1>
      <p className="text-gray-600 mt-2">{sim.short}</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <div className="text-sm text-gray-500"><strong>Duration:</strong> {sim.duration}</div>
          <div className="text-sm text-gray-500"><strong>Difficulty:</strong> {sim.difficulty}</div>
          <div className="text-sm text-gray-500"><strong>Skills:</strong> {sim.skills.join(', ')}</div>
        </div>
        <div className="text-sm text-gray-600">{sim.scenario}</div>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {sim.tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Deliverables</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {sim.deliverables.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Rubric</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {sim.rubric.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Hints</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {sim.hints.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </section>
    </div>
  );
}
