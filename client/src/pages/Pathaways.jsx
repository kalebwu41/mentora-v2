import { pathawayCatalog } from '../data/pathaways.js';
import PathwayIndexCard from '../components/pathways/PathwayIndexCard.jsx';

export default function Pathaways() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Career Pathways</h1>
        <p className="mt-2 text-sm text-gray-600">Explore structured career paths built around real-world skills.</p>
      </header>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pathawayCatalog.map((p) => (
            <div key={p.id} className="">
              <PathwayIndexCard pathway={p} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
