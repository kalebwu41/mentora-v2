import { useState } from 'react';
import Chip from '../ui/Chip.jsx';

const passionOptions = ['software', 'design', 'entrepreneurship', 'healthcare', 'mechanical', 'marketing'];
const strengthOptions = ['communication', 'systems thinking', 'creative problem solving', 'analysis', 'leadership'];

export default function PersonaForm({ onSubmit, loading }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: 'Ari Mentor',
    gradeLevel: 11,
    passions: ['software', 'design'],
    strengths: ['creative problem solving', 'communication'],
    region: 'Seattle',
    habits: 4,
  });

  function toggleItem(type, value) {
    setForm((prev) => {
      const arr = prev[type];
      const exists = arr.includes(value);
      return {
        ...prev,
        [type]: exists ? arr.filter((item) => item !== value) : [...arr, value],
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      onSubmit(form);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel space-y-6 rounded-3xl p-6">
      <div>
        <p className="text-sm font-semibold text-mentora-teal">Step {step}/2</p>
        <h2 className="text-xl font-semibold text-mentora-navy">Tell Mentora where you are right now</h2>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-mentora-navy/70">
            Preferred name
            <input
              className="mt-2 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-4 py-3 focus:border-mentora-teal focus:outline-none"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            />
          </label>
          <label className="block text-sm font-semibold text-mentora-navy/70">
            Grade level
            <input
              type="number"
              min={9}
              max={12}
              className="mt-2 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-4 py-3 focus:border-mentora-teal focus:outline-none"
              value={form.gradeLevel}
              onChange={(e) => setForm((prev) => ({ ...prev, gradeLevel: Number(e.target.value) }))}
            />
          </label>
          <div>
            <p className="text-sm font-semibold text-mentora-navy/70">Passions</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {passionOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  tone={form.passions.includes(option) ? 'teal' : 'navy'}
                  onClick={() => toggleItem('passions', option)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-mentora-navy/70">Signature strengths</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {strengthOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  tone={form.strengths.includes(option) ? 'teal' : 'navy'}
                  onClick={() => toggleItem('strengths', option)}
                />
              ))}
            </div>
          </div>
          <label className="block text-sm font-semibold text-mentora-navy/70">
            City or region
            <input
              className="mt-2 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-4 py-3 focus:border-mentora-teal focus:outline-none"
              value={form.region}
              onChange={(e) => setForm((prev) => ({ ...prev, region: e.target.value }))}
            />
          </label>
          <label className="block text-sm font-semibold text-mentora-navy/70">
            Weekly learning habits (0–5)
            <input
              type="number"
              min={0}
              max={5}
              className="mt-2 w-full rounded-2xl border border-mentora-navy/10 bg-white/80 px-4 py-3 focus:border-mentora-teal focus:outline-none"
              value={form.habits}
              onChange={(e) => setForm((prev) => ({ ...prev, habits: Number(e.target.value) }))}
            />
          </label>
        </div>
      )}

      <div className="flex items-center justify-between">
        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-sm font-semibold text-mentora-navy/70 underline-offset-2 hover:underline"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="ml-auto rounded-full bg-mentora-navy px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-mentora-teal disabled:opacity-50"
        >
          {loading ? 'Generating...' : step === 1 ? 'Next' : 'Generate Roadmap'}
        </button>
      </div>
    </form>
  );
}
