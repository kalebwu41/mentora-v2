import { useEffect, useMemo, useState } from 'react';

export default function usePathaway(pathaway) {
  // submissions: array where each item is { files: [...], links: [...], text: '...' }
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    setSubmissions([]);
  }, [pathaway.id]);

  const currentStep = pathaway.steps[submissions.length];
  const completed = submissions.length === pathaway.steps.length;

  const summary = useMemo(() => {
    if (!completed) return null;
    // Basic summary: completion percentage and simple reflection
    const reflections = submissions.map((s, idx) => ({
      title: pathaway.steps[idx].title,
      files: s.files?.length || 0,
      text: s.text || '',
    }));
    return {
      score: `${Math.round((submissions.length / pathaway.steps.length) * 100)}%`,
      reflection: `Submitted ${submissions.length} of ${pathaway.steps.length} steps.`,
      reflections,
    };
  }, [completed, submissions, pathaway]);

  function submitStep(payload) {
    if (completed) return;
    setSubmissions((prev) => [...prev, payload]);
  }

  function reset() {
    setSubmissions([]);
  }

  return {
    currentStep,
    selections: submissions,
    completed,
    choose: submitStep,
    summary,
    reset,
  };
}
