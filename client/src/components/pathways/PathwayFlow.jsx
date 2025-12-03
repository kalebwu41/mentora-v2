import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Link as LinkIcon, FileText, CheckCircle, AlertCircle, Sparkles, Clock, Target } from 'lucide-react';
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
  const [isDragging, setIsDragging] = useState(false);

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
    setIsDragging(false);
    onFilesSelected(e.dataTransfer.files);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
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

  function removeLink(idx) {
    setLinks((prev) => prev.filter((_, i) => i !== idx));
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
    <div className="space-y-8">
      {/* Active Pathway Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08]"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mentora-accent/10 mb-3">
              <Target className="w-4 h-4 text-mentora-accent" />
              <span className="text-xs font-bold uppercase tracking-wide text-mentora-accent">Active Pathway</span>
            </div>
            <h2 className="text-3xl font-extrabold text-mentora-text-dark mb-2">{pathway.title}</h2>
            <p className="text-lg text-mentora-text-on-light font-medium">{pathway.mood}</p>
          </div>
        </div>

        {/* Progress Indicator */}
        {!completed && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-mentora-text-dark">
                Step {selections.length + 1} of {pathway.steps.length}
              </span>
              <span className="text-sm font-semibold text-mentora-accent">
                {Math.round((selections.length / pathway.steps.length) * 100)}% Complete
              </span>
            </div>
            {/* Segmented Progress Bar */}
            <div className="flex gap-2">
              {pathway.steps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    idx < selections.length
                      ? 'bg-mentora-accent'
                      : idx === selections.length
                      ? 'bg-mentora-accent/30'
                      : 'bg-mentora-text-dark/[0.08]'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {!completed && (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Main Task Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08] space-y-6"
          >
            {/* Task Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-mentora-accent" />
                <h3 className="text-xl font-bold text-mentora-text-dark">Your Task</h3>
              </div>
              <p className="text-2xl font-extrabold text-mentora-text-dark mb-3">{currentStep.title}</p>
              <p className="text-base text-mentora-text-on-light font-medium leading-relaxed">{currentStep.description}</p>
            </div>

            {/* File Upload Zone */}
            <div>
              <label className="block text-sm font-bold text-mentora-text-dark mb-3">
                <Upload className="w-4 h-4 inline mr-2" />
                Upload Files
              </label>
              <div
                className={`rounded-xl border-2 border-dashed p-8 text-center transition-all ${
                  isDragging
                    ? 'border-mentora-accent bg-mentora-accent/5 scale-[1.02]'
                    : 'border-mentora-text-dark/[0.12] bg-mentora-neutral-50/50 hover:border-mentora-accent/50'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleBrowse();
                  }
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => onFilesSelected(e.target.files)}
                  multiple
                  aria-label="Upload files"
                />
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-mentora-accent/10 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-mentora-accent" />
                  </div>
                  <p className="text-base font-semibold text-mentora-text-dark mb-2">
                    Drag files here or{' '}
                    <button
                      type="button"
                      onClick={handleBrowse}
                      className="text-mentora-accent underline hover:text-mentora-accent-bright focus:outline-none focus:ring-2 focus:ring-mentora-accent/30 rounded"
                    >
                      browse
                    </button>
                  </p>
                  <p className="text-sm text-mentora-text-on-light">
                    Supported: JPG, PNG, PDF, DOC, TXT, MP4 — Max 50MB per file
                  </p>
                </div>

                {/* Uploaded Files */}
                {files.length > 0 && (
                  <div className="mt-6 grid gap-3 text-left">
                    {files.map((f, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-4 rounded-lg bg-white p-4 border border-mentora-text-dark/[0.08] shadow-sm"
                      >
                        {f.type.startsWith('image/') ? (
                          <img src={URL.createObjectURL(f)} alt={f.name} className="h-12 w-12 object-cover rounded" />
                        ) : (
                          <div className="h-12 w-12 rounded bg-mentora-accent/10 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-mentora-accent" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-mentora-text-dark truncate">{f.name}</div>
                          <div className="text-xs text-mentora-text-on-light">{Math.round(f.size / 1024)} KB</div>
                        </div>
                        <button
                          onClick={() => removeFile(idx)}
                          className="text-sm font-semibold text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30 rounded px-2 py-1"
                          aria-label={`Remove ${f.name}`}
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Link Input */}
            <div>
              <label htmlFor="link-input" className="block text-sm font-bold text-mentora-text-dark mb-3">
                <LinkIcon className="w-4 h-4 inline mr-2" />
                Add Links
              </label>
              <div className="flex gap-3">
                <input
                  id="link-input"
                  type="url"
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addLink();
                    }
                  }}
                  placeholder="Paste a URL (Figma, Loom, Google Drive...)"
                  className="flex-1 rounded-lg border-2 border-mentora-text-dark/[0.12] bg-white px-4 py-3 text-mentora-text-dark font-medium placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all"
                />
                <button
                  type="button"
                  onClick={addLink}
                  className="px-6 py-3 bg-mentora-accent text-white font-bold rounded-lg hover:bg-mentora-accent-bright focus:outline-none focus:ring-4 focus:ring-mentora-accent/30 transition-all"
                >
                  Add
                </button>
              </div>
              {links.length > 0 && (
                <div className="mt-4 space-y-2">
                  {links.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-mentora-accent/5 border border-mentora-accent/20"
                    >
                      <LinkIcon className="w-4 h-4 text-mentora-accent flex-shrink-0" />
                      <span className="flex-1 text-sm font-medium text-mentora-text-dark truncate">{l}</span>
                      <button
                        onClick={() => removeLink(i)}
                        className="text-sm font-semibold text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30 rounded px-2 py-1"
                        aria-label="Remove link"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Context */}
            <div>
              <label htmlFor="context-textarea" className="block text-sm font-bold text-mentora-text-dark mb-3">
                <FileText className="w-4 h-4 inline mr-2" />
                Additional Context
              </label>
              <textarea
                id="context-textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Tell us about your approach, challenges faced, or key learnings..."
                className="w-full rounded-lg border-2 border-mentora-text-dark/[0.12] bg-white px-4 py-3 min-h-[160px] text-mentora-text-dark font-medium placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all resize-none"
              />
            </div>
          </motion.div>

          {/* Sidebar - Submission Info */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Review Process Card */}
            <div className="bg-gradient-accent rounded-2xl p-6 text-white shadow-brand">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wide">Review Process</h4>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Submit your work when ready</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Mentor reviews within 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Receive detailed feedback and next steps</span>
                </li>
              </ul>
            </div>

            {/* Submission Checklist */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-mentora-text-dark/[0.08]">
              <h4 className="text-sm font-bold text-mentora-text-dark uppercase tracking-wide mb-4">
                Submission Checklist
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  {files.length > 0 ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-mentora-text-on-light/40" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      files.length > 0 ? 'text-mentora-text-dark' : 'text-mentora-text-on-light'
                    }`}
                  >
                    Upload files or materials
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  {links.length > 0 || text.trim() ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-mentora-text-on-light/40" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      links.length > 0 || text.trim() ? 'text-mentora-text-dark' : 'text-mentora-text-on-light'
                    }`}
                  >
                    Add links or context
                  </span>
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <motion.button
              type="button"
              onClick={submitCurrent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-mentora-accent text-white text-lg font-bold rounded-xl hover:bg-mentora-accent-bright focus:outline-none focus:ring-4 focus:ring-mentora-accent/30 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!files.length && !links.length && !text.trim()}
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Submit Step
              </span>
            </motion.button>
          </motion.aside>
        </div>
      )}

      {/* Completion State */}
      {completed && summary && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Success Card */}
          <div className="bg-gradient-accent rounded-2xl p-12 text-white text-center shadow-brand">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold mb-3">Pathway Completed!</h3>
            <p className="text-5xl font-extrabold mb-4">{summary.score}</p>
            <p className="text-lg font-medium max-w-2xl mx-auto">{summary.reflection}</p>
          </div>

          {/* Submission Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-mentora-text-dark/[0.08]">
            <h4 className="text-lg font-bold text-mentora-text-dark mb-6">Submission Summary</h4>
            <ul className="space-y-3">
              {summary.reflections.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center justify-between p-4 rounded-xl bg-mentora-neutral-50 border border-mentora-text-dark/[0.08]"
                >
                  <span className="font-semibold text-mentora-text-dark">{item.title}</span>
                  <span className="text-sm font-bold text-mentora-accent">{item.files} files</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Start Over Button */}
          <button
            type="button"
            onClick={reset}
            className="w-full px-8 py-4 bg-white border-2 border-mentora-accent text-mentora-accent text-lg font-bold rounded-xl hover:bg-mentora-accent hover:text-white focus:outline-none focus:ring-4 focus:ring-mentora-accent/30 transition-all"
          >
            Start Over
          </button>
        </motion.div>
      )}
    </div>
  );
}
