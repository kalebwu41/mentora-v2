import { useNavigate } from 'react-router-dom';

function truncateWords(text = '', maxWords = 14) {
  const parts = text.split(/\s+/).slice(0, maxWords);
  return parts.join(' ') + (parts.length < text.split(/\s+/).length ? '…' : '');
}

export default function PathwayIndexCard({ pathway }) {
  const navigate = useNavigate();

  // Derive simple metadata from available fields to avoid changing dataset
  const stepCount = Array.isArray(pathway.steps) ? pathway.steps.length : 0;
  const commitment = stepCount <= 1 ? '1–3 months' : stepCount === 2 ? '3–6 months' : '6–12 months';
  const difficulty = stepCount <= 1 ? 'Beginner' : stepCount === 2 ? 'Intermediate' : 'Advanced';

  function handleClick() {
    navigate(`/pathway/${pathway.id}`);
  }

  return (
    <button
      onClick={handleClick}
      className="text-left w-full rounded-2xl border bg-white px-6 py-5 shadow-sm hover:shadow-md transition-colors focus:outline-none"
      aria-label={`View ${pathway.title}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 border flex items-center justify-center text-gray-600">
          <span className="text-sm font-semibold uppercase">{pathway.id.slice(0,3)}</span>
        </div>

        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900">{pathway.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{truncateWords(pathway.mood, 14)}</p>

          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <span>{commitment}</span>
            <span className="mx-1">·</span>
            <span>{difficulty}</span>
          </div>
        </div>

        <div className="flex items-center pl-4">
          <span className="text-sm text-gray-400">View Pathway →</span>
        </div>
      </div>
    </button>
  );
}
