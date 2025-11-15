import { useEffect, useMemo, useState } from 'react';
import { evaluatePathaway } from '../utils/scoring.js';

export default function usePathaway(pathaway) {
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    setSelections([]);
  }, [pathaway.id]);

  const currentStep = pathaway.steps[selections.length];
  const completed = selections.length === pathaway.steps.length;

  const summary = useMemo(() => {
    if (!completed) return null;
    return evaluatePathaway(
      selections.map((choice, index) => ({
        title: pathaway.steps[index].title,
        choice: choice.label,
        delta: choice.delta,
        skill: choice.skill,
      })),
    );
  }, [completed, selections, pathaway]);

  function choose(option) {
    if (completed) return;
    setSelections((prev) => [...prev, option]);
  }

  function reset() {
    setSelections([]);
  }

  return {
    currentStep,
    selections,
    completed,
    choose,
    summary,
    reset,
  };
}
