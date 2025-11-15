export default function Timeline({ items }) {
  return (
    <ol className="relative space-y-6 border-l border-mentora-navy/10 pl-6">
      {items.map((item) => (
        <li key={item.grade} className="space-y-2">
          <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-white bg-mentora-teal" />
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-mentora-teal">{item.grade}</p>
              <p className="text-xs uppercase tracking-wide text-mentora-navy/60">{item.focus}</p>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mentora-navy/80">
              {item.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
