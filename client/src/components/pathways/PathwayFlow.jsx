import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import usePathaway from '../../hooks/usePathaway.js';
import useSubmissionStatus from '../../hooks/useSubmissionStatus.js';
import toast from 'react-hot-toast';

export default function PathwayFlow({ pathway, onComplete }) {
  const { currentStep, choose, selections, completed, summary, reset } = usePathaway(pathway);
  const { addSubmission } = useSubmissionStatus();

  useEffect(() => {
    if (completed && summary && onComplete) {
      onComplete(summary);
    }
  }, [completed, summary, onComplete]);

  // Upload handling
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState('');
  const [text, setText] = useState('');

  function onFilesSelected(selectedFiles) {
    const allowed = ['image/jpeg', 'image/png', 'application/pdf', 'video/mp4', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxBytes = 50 * 1024 * 1024; // 50MB
    const list = Array.from(selectedFiles).slice(0, 10);
    for (const f of list) {
      if (f.size > maxBytes) {
        toast.error(`${f.name} is larger than 50MB and was not added.`);
        continue;
      }
      if (!allowed.includes(f.type) && !f.name.match(/\.(docx|doc|txt|pdf|png|jpe?g|mp4)$/i)) {
        toast.error(`${f.name} is not a supported file type.`);
        continue;
      }
      setFiles((prev) => [...prev, f]);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    onFilesSelected(e.dataTransfer.files);
  }

  function handleBrowse() {
    fileInputRef.current?.click();
  }

  function removeFile(idx) {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  }

  function addLink() {
    if (!linkInput) return;
    setLinks((prev) => [...prev, linkInput]);
    setLinkInput('');
  }

  function submitCurrent() {
    if (!files.length && !links.length && !text.trim()) {
      toast.error('Please attach a file, link, or write a short reflection before submitting.');
      return;
    }
    // Create lightweight descriptors for files to keep in-memory; actual upload happens server-side
    const payload = { files: files.map((f) => ({ name: f.name, size: f.size, type: f.type })), links, text };
    addSubmission(pathway.id, selections.length, payload);
    choose(payload);
    setFiles([]);
    setLinks([]);
    setText('');
    toast.success('Step submitted and marked for mentor review');
  }

  return (
    <div className="glass-panel rounded-3xl p-6 space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-mentora-accent">Active Pathaway</p>
        <h2 className="text-2xl font-semibold">{pathway.title}</h2>
        <p className="text-sm text-mentora-muted">{pathway.mood}</p>
      </div>

      {!completed && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm text-mentora-muted">
            <span>Step {selections.length + 1}/{pathway.steps.length}</span>
            <span>{Math.round((selections.length / pathway.steps.length) * 100)}% complete</span>
          </div>
          <div className="h-2 rounded-full bg-mentora-primary/10">
            <div
              className="h-full rounded-full bg-mentora-accent transition-all"
              style={{ width: `${(selections.length / pathway.steps.length) * 100}%` }}
            />
          </div>

          <div className="rounded-2xl bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold text-mentora-accent">{currentStep.title}</p>
            <p className="mt-2 text-sm text-mentora-muted">{currentStep.description}</p>

            <div
              className="mt-4 rounded-xl border-2 border-dashed border-mentora-primary/20 p-6 text-center"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              role="button"
              tabIndex={0}
            >
              <input ref={fileInputRef} type="file" className="hidden" onChange={(e) => onFilesSelected(e.target.files)} multiple />
              <p className="text-sm">Drag files here or <button type="button" onClick={handleBrowse} className="underline">click to browse</button></p>
              <p className="text-xs text-mentora-muted mt-2">Supported: JPG, PNG, PDF, DOC, TXT, MP4 — max 50MB per file</p>

              {files.length > 0 && (
                <div className="mt-4 grid gap-2">
                  {files.map((f, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-md bg-white/90 p-2">
                      <div className="flex items-center gap-3">
                        {f.type.startsWith('image/') && (
                          <img src={URL.createObjectURL(f)} alt={f.name} className="h-12 w-12 object-cover rounded" />
                        )}
                        <div>
                          <div className="font-semibold text-sm">{f.name}</div>
                          <div className="text-xs text-mentora-muted">{Math.round(f.size / 1024)} KB</div>
                        </div>
                      </div>
                      <button onClick={() => removeFile(idx)} className="text-sm text-red-500">Remove</button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4">
                <div className="flex gap-2">
                  <input value={linkInput} onChange={(e) => setLinkInput(e.target.value)} placeholder="Paste a URL (Figma, Loom, Google Drive...)" className="flex-1 rounded-md border px-3 py-2 text-sm" />
                  <button type="button" onClick={addLink} className="btn">Add</button>
                </div>
                {links.length > 0 && (
                  <ul className="mt-2 text-sm text-mentora-muted">
                    {links.map((l, i) => (
                      <li key={i} className="truncate">{l}</li>
                    ))}
                  </ul>
                )}
              </div>

              <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tell us about your approach..." className="mt-4 w-full rounded-md border p-3 min-h-[120px] text-sm" />

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-mentora-muted">This submission will be reviewed by a mentor.</div>
                <button type="button" onClick={submitCurrent} className="btn">Submit Step</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {completed && summary && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="rounded-3xl bg-white/90 p-6 text-center">
            <p className="text-sm font-semibold text-mentora-accent">Completed</p>
            <p className="text-4xl font-bold text-mentora-primary">{summary.score}</p>
            <p className="mt-2 text-sm text-mentora-muted">{summary.reflection}</p>
          </div>
          <div className="rounded-2xl border border-mentora-primary/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-mentora-muted">Submission Summary</p>
            <ul className="mt-3 space-y-2 text-sm text-mentora-muted">
              {summary.reflections.map((item) => (
                <li key={item.title} className="flex items-center justify-between rounded-2xl bg-white/60 px-3 py-2">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-xs text-mentora-accent">{item.files} files</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={reset}
            className="w-full rounded-full btn"
          >
            Start Over
          </button>
        </motion.div>
      )}
    </div>
  );
