import { useState } from 'react';
import { motion } from 'framer-motion';
import Chip from '../ui/Chip.jsx';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

const passionOptions = ['software', 'design', 'entrepreneurship', 'healthcare', 'mechanical', 'marketing'];
const strengthOptions = ['communication', 'systems thinking', 'creative problem solving', 'analysis', 'leadership'];

export default function PersonaForm({ onSubmit, loading }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: 'John Student',
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

  const progress = (step / 2) * 100;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-mentora-text-dark/[0.08] p-8 shadow-card sticky top-24"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-mentora-accent uppercase tracking-wide">
            Step {step} of 2
          </span>
          <span className="text-sm font-semibold text-mentora-text-on-light">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-mentora-neutral-50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Step Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-mentora-text-dark mb-2">
          {step === 1 ? 'Tell us about yourself' : 'Your strengths & goals'}
        </h2>
        <p className="text-sm text-mentora-text-on-light font-medium">
          {step === 1
            ? 'Help us understand your background and interests'
            : 'Share your unique skills and location preferences'}
        </p>
      </div>

      {/* Step 1 Fields */}
      {step === 1 && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-mentora-text-dark mb-2">
              Preferred name
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-lg border-2 border-mentora-text-dark/[0.12] bg-white px-4 py-3 text-mentora-text-dark font-medium placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label htmlFor="gradeLevel" className="block text-sm font-bold text-mentora-text-dark mb-2">
              Grade level
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <input
              id="gradeLevel"
              type="number"
              min={9}
              max={12}
              required
              className="w-full rounded-lg border-2 border-mentora-text-dark/[0.12] bg-white px-4 py-3 text-mentora-text-dark font-medium placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all"
              placeholder="9-12"
              value={form.gradeLevel}
              onChange={(e) => setForm((prev) => ({ ...prev, gradeLevel: Number(e.target.value) }))}
            />
            <p className="mt-2 text-xs text-mentora-text-on-light">Current grade (9th-12th)</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-mentora-text-dark mb-3">
              Your passions
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <p className="text-xs text-mentora-text-on-light mb-3">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {passionOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  tone={form.passions.includes(option) ? 'accent' : 'primary'}
                  onClick={() => toggleItem('passions', option)}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-mentora-text-on-light">
              {form.passions.length} selected
            </p>
          </div>
        </motion.div>
      )}

      {/* Step 2 Fields */}
      {step === 2 && (
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <label className="block text-sm font-bold text-mentora-text-dark mb-3">
              Signature strengths
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <p className="text-xs text-mentora-text-on-light mb-3">Choose your top skills</p>
            <div className="flex flex-wrap gap-2">
              {strengthOptions.map((option) => (
                <Chip
                  key={option}
                  label={option}
                  tone={form.strengths.includes(option) ? 'accent' : 'primary'}
                  onClick={() => toggleItem('strengths', option)}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-mentora-text-on-light">
              {form.strengths.length} selected
            </p>
          </div>

          <div>
            <label htmlFor="region" className="block text-sm font-bold text-mentora-text-dark mb-2">
              City or region
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <input
              id="region"
              type="text"
              required
              className="w-full rounded-lg border-2 border-mentora-text-dark/[0.12] bg-white px-4 py-3 text-mentora-text-dark font-medium placeholder:text-mentora-text-on-light/50 focus:border-mentora-accent focus:outline-none focus:ring-4 focus:ring-mentora-accent/10 transition-all"
              placeholder="e.g., Seattle, San Francisco"
              value={form.region}
              onChange={(e) => setForm((prev) => ({ ...prev, region: e.target.value }))}
            />
            <p className="mt-2 text-xs text-mentora-text-on-light">
              Helps us find relevant opportunities
            </p>
          </div>

          <div>
            <label htmlFor="habits" className="block text-sm font-bold text-mentora-text-dark mb-2">
              Weekly learning hours
              <span className="text-mentora-accent ml-1">*</span>
            </label>
            <div className="flex items-center gap-4">
              <input
                id="habits"
                type="range"
                min={0}
                max={5}
                className="flex-1 h-2 bg-mentora-neutral-50 rounded-lg appearance-none cursor-pointer accent-mentora-accent"
                value={form.habits}
                onChange={(e) => setForm((prev) => ({ ...prev, habits: Number(e.target.value) }))}
              />
              <span className="text-2xl font-bold text-mentora-accent w-12 text-center">
                {form.habits}
              </span>
            </div>
            <p className="mt-2 text-xs text-mentora-text-on-light">
              Hours per week dedicated to learning (0-5)
            </p>
          </div>
        </motion.div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-mentora-text-dark/[0.08]">
        {step === 2 ? (
          <motion.button
            type="button"
            onClick={() => setStep(1)}
            whileHover={{ x: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-mentora-text-on-light hover:text-mentora-text-dark hover:bg-mentora-neutral-50 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </motion.button>
        ) : (
          <div />
        )}

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-mentora-accent text-white font-bold text-sm hover:bg-mentora-accent-bright transition-all duration-200 shadow-button hover:shadow-button-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-button"
        >
          {loading ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : step === 1 ? (
            <>
              Next
              <ChevronRight className="w-4 h-4" />
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Roadmap
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
}
