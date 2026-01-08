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
      className="text-left w-full rounded-xl border border-mentora-neutral-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:border-mentora-accent/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mentora-accent/50 group"
      aria-label={`View ${pathway.title}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-mentora-accent/10 flex items-center justify-center text-mentora-accent group-hover:bg-mentora-accent group-hover:text-white transition-all duration-200">
          <span className="text-sm font-bold uppercase">{pathway.id.slice(0,3)}</span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-mentora-text-dark group-hover:text-mentora-accent transition-colors duration-200 mb-2">
            {pathway.title}
          </h3>
          <p className="text-sm text-mentora-text-on-light leading-relaxed line-clamp-2 mb-3">
            {truncateWords(pathway.mood, 14)}
          </p>

          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="px-2.5 py-1 rounded-md bg-mentora-accent/10 text-mentora-accent font-medium whitespace-nowrap">
              {commitment}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-mentora-indigo/10 text-mentora-indigo font-medium whitespace-nowrap">
              {difficulty}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-lg text-mentora-accent group-hover:translate-x-1 transition-transform duration-200">→</span>
        </div>
      </div>
    </button>
  );
}
