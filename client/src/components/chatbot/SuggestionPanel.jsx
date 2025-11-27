const prompts = [
  {
    title: 'Roadmap Boost',
    body: '“What would a two-week stretch assignment look like for my storytelling strength?”',
  },
  {
    title: 'Pod Reflection',
    body: '“Summarize the core feedback themes from my last Pod critique.”',
  },
  {
    title: 'Pathaway Debrief',
    body: '“Turn my Pathaway decision trail into next-step action items.”',
  },
];

export default function SuggestionPanel({ onPrompt }) {
  return (
    <div className="glass-panel rounded-3xl p-6 space-y-3">
      <p className="text-sm font-semibold text-mentora-accent">Try asking</p>
      {prompts.map((prompt) => (
        <button
          key={prompt.title}
          onClick={() => onPrompt(prompt.body)}
          className="w-full rounded-2xl border border-mentora-primary/10 bg-white/70 px-4 py-3 text-left text-sm transition hover:border-mentora-accent"
        >
          <p className="text-xs uppercase tracking-wide text-mentora-muted">{prompt.title}</p>
          <p className="text-mentora-primary">{prompt.body}</p>
        </button>
      ))}
    </div>
  );
}
