import React, { useEffect, useMemo, useRef, useState } from 'react';

type FileNode = { path: string; content: string };
type Task = { id: string; title: string; description: string; required?: boolean; done?: boolean; unlocked?: boolean };
type Metric = { id: string; label: string; value: number; unit?: string };

export default function JobSimulation() {
  // Simulated urgent ticket
  const [priority] = useState<'P0' | 'P1' | 'P2'>('P0');
  const [impact] = useState('15% of users affected');

  // Countdown (start at 48 hours -> simulate faster)
  const START_SECONDS = 48 * 3600; // real seconds
  const [secondsLeft, setSecondsLeft] = useState(3600 * 2); // fast demo: 2 hours
  const [running, setRunning] = useState(true);

  // Files (simple file explorer)
  const [files, setFiles] = useState<FileNode[]>(() => [
    { path: 'src/index.js', content: '// entry point\nconsole.log("app start")' },
    { path: 'src/auth.js', content: '// auth handler\nexport function login(){ /* TODO */ }' },
    { path: 'tests/auth.test.js', content: "// tests expect login to handle tokens" },
  ]);
  const [activePath, setActivePath] = useState(files[0].path);
  const activeFile = useMemo(() => files.find((f) => f.path === activePath) || files[0], [files, activePath]);

  // Editor state
  const [editorValue, setEditorValue] = useState(activeFile.content);
  useEffect(() => setEditorValue(activeFile.content), [activeFile.path]);

  // Tasks & progress
  const [tasks, setTasks] = useState<Task[]>([
    { id: 't1', title: 'Reproduce bug locally', description: 'Run the test suite and reproduce the failing auth scenario.', required: true, unlocked: true, done: false },
    { id: 't2', title: 'Add observability', description: 'Add structured logging to the auth flow and surface metrics.', required: true, unlocked: false, done: false },
    { id: 't3', title: 'Patch & test', description: 'Implement a minimal hotfix and add unit/e2e tests.', required: true, unlocked: false, done: false },
  ]);

  // Monitoring metrics (simulated)
  const [metrics, setMetrics] = useState<Metric[]>([
    { id: 'm1', label: 'Errors/sec', value: 12, unit: '/s' },
    { id: 'm2', label: 'Signup drop', value: 15, unit: '%' },
    { id: 'm3', label: 'Latency (p95)', value: 420, unit: 'ms' },
  ]);

  // Console logs
  const [logs, setLogs] = useState<string[]>(['[system] Simulation ready']);
  const logsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    logsRef.current?.scrollTo({ top: logsRef.current.scrollHeight });
  }, [logs]);

  // Timer
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
      // simulate metric changes
      setMetrics((m) => m.map((mm) => ({ ...mm, value: Math.max(0, Math.round(mm.value + (Math.random() - 0.4) * 2)) })));
      // append small log
      setLogs((prev) => [...prev, `[tick] ${new Date().toLocaleTimeString()} - monitoring updated`].slice(-200));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  // Editor save
  function saveFile() {
    setFiles((prev) => prev.map((f) => (f.path === activePath ? { ...f, content: editorValue } : f)));
    setLogs((l) => [...l, `[save] ${activePath} saved`].slice(-200));
  }

  // Run tests (simulate)
  function runTests() {
    setLogs((l) => [...l, '[test] Running unit tests...']);
    // quick simulated test logic: if editor contains 'fix' or 'login', tests pass
    const pass = editorValue.includes('fix') || editorValue.includes('login');
    setTimeout(() => {
      setLogs((l) => [...l, pass ? '[test] ✅ All tests passed' : '[test] ❌ 2 failing tests']);
      if (pass) {
        // mark t1 or t3 as done depending on tasks
        setTasks((t) => t.map((tt, i) => (tt.unlocked ? { ...tt, done: true } : tt)));
        unlockNextTasks();
      }
    }, 900);
  }

  function unlockNextTasks() {
    setTasks((t) => {
      const copy = t.slice();
      for (let i = 0; i < copy.length; i++) {
        if (copy[i].done && copy[i + 1]) copy[i + 1].unlocked = true;
      }
      return copy;
    });
  }

  // Submit artifacts (simulate multiple files)
  const [submissions, setSubmissions] = useState<Record<string, any>[]>([]);
  function submitWork() {
    const artifact = {
      id: `sub_${Date.now()}`,
      files: files.map((f) => ({ path: f.path, size: f.content.length })),
      note: editorValue.slice(0, 400),
      submittedAt: new Date().toISOString(),
      status: 'Submitted',
    };
    setSubmissions((s) => [artifact, ...s]);
    setLogs((l) => [...l, `[submit] Work submitted (${artifact.files.length} files)`].slice(-200));
  }

  // simple progress calculation
  const progress = Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100);

  // helpers
  function formatTime(secs: number) {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* URGENT TICKET HEADER */}
      <div className="rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold uppercase tracking-wide">URGENT TICKET</div>
            <div className="px-2 py-1 rounded bg-white/20 text-xs">{priority}</div>
            <div className="ml-2 text-sm opacity-90">Timeline: <span className="font-mono ml-1">{formatTime(secondsLeft)}</span></div>
          </div>
          <div className="mt-2 text-sm">Project: <span className="font-semibold">Fix signup auth race on mobile</span></div>
          <div className="mt-1 text-xs opacity-90">Impact: <span className="font-medium">{impact}</span></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-white/90">Status: <span className="font-semibold">Investigation</span></div>
          <div className="flex items-center gap-2">
            <button onClick={() => setRunning((r) => !r)} className="px-3 py-2 rounded bg-white/20">{running ? 'Pause' : 'Resume'}</button>
            <div className="px-3 py-2 rounded bg-white/20">Priority: <strong className="ml-2">{priority}</strong></div>
          </div>
        </div>
      </div>

      {/* WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: File explorer + editor */}
        <div className="lg:col-span-3 bg-white/5 rounded-xl p-3 flex flex-col h-[60vh]">
          <div className="text-sm font-semibold mb-3">Files</div>
          <div className="flex-1 overflow-auto border border-white/5 rounded p-2 bg-white/3">
            {files.map((f) => (
              <div key={f.path} className={`p-2 rounded cursor-pointer hover:bg-white/5 ${f.path === activePath ? 'bg-white/10' : ''}`} onClick={() => setActivePath(f.path)}>
                <div className="text-sm font-medium">{f.path}</div>
                <div className="text-xs text-mentora-muted">{f.content.length} bytes</div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={saveFile} className="btn flex-1">Save</button>
            <button onClick={() => { setFiles((p) => [{ path: `src/new_${Date.now()}.js`, content: '// new file' }, ...p]); }} className="btn ghost">New</button>
          </div>
        </div>

        {/* Center: Editor + Preview */}
        <div className="lg:col-span-6 flex flex-col bg-white/5 rounded-xl overflow-hidden h-[60vh]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/3">
            <div className="font-semibold">{activePath}</div>
            <div className="flex items-center gap-2">
              <button onClick={runTests} className="btn">Run Tests</button>
              <button onClick={() => setEditorValue((v) => v + '\n// fix') } className="btn ghost">Insert Fix</button>
            </div>
          </div>
          <div className="flex-1 grid grid-rows-[1fr_auto]">
            <div className="p-3 overflow-auto">
              <textarea value={editorValue} onChange={(e) => setEditorValue(e.target.value)} className="w-full h-64 md:h-96 bg-black/80 text-white font-mono p-3 rounded" />
            </div>
            <div className="border-t border-white/5 p-3 bg-black/90 text-white flex gap-3">
              <div className="flex-1">
                <div className="text-xs text-white/80">Console</div>
                <div ref={logsRef} className="mt-2 h-24 overflow-auto text-xs font-mono bg-black/95 p-2 rounded">
                  {logs.slice(-50).map((ln, i) => (<div key={i}>{ln}</div>))}
                </div>
              </div>
              <div className="w-48">
                <div className="text-xs text-white/80">Live Preview</div>
                <div className="mt-2 h-24 bg-white/5 rounded flex items-center justify-center text-xs">Preview (placeholder)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tasks & progress */}
        <div className="lg:col-span-3 bg-white/5 rounded-xl p-4 flex flex-col h-[60vh]">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold">Task Checklist</div>
            <div className="text-xs text-mentora-muted">{progress}%</div>
          </div>
          <div className="flex-1 overflow-auto space-y-3">
            {tasks.map((t) => (
              <div key={t.id} className={`p-3 rounded border ${t.done ? 'bg-green-600/10 border-green-600/20' : 'bg-white/3 border-white/5'}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    <div className="text-xs text-mentora-muted">{t.description}</div>
                  </div>
                  <div>
                    <input type="checkbox" checked={!!t.done} disabled={!t.unlocked} onChange={(e) => setTasks((ps) => ps.map((x) => x.id === t.id ? { ...x, done: e.target.checked } : x))} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <div className="text-xs text-mentora-muted mb-2">Submissions</div>
            <div className="space-y-2 max-h-28 overflow-auto">
              {submissions.map((s) => (
                <div key={s.id} className="p-2 bg-white/3 rounded text-xs">
                  <div className="font-mono">{s.id}</div>
                  <div className="text-xxs text-mentora-muted">{new Date(s.submittedAt).toLocaleString()}</div>
                </div>
              ))}
              {submissions.length === 0 && <div className="text-xs text-mentora-muted">No submissions yet</div>}
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={submitWork} className="btn flex-1">Submit Work</button>
              <button onClick={() => { setSubmissions([]); setLogs((l) => [...l, '[action] cleared submissions']); }} className="btn ghost">Clear</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Monitoring Dashboard */}
      <div className="rounded-xl bg-white/5 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">Monitoring</div>
            <div className="text-xs text-mentora-muted">Live system metrics (simulated)</div>
          </div>
          <div className="flex items-center gap-4">
            {metrics.map((m) => (
              <div key={m.id} className="text-center">
                <div className="text-2xl font-bold">{m.value}{m.unit}</div>
                <div className="text-xs text-mentora-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
