import dayjs from 'dayjs';

export function computeRoadmapScore({ passions = [], strengths = [], habits = 0, marketMatches = 0 }) {
  const passionScore = passions.length * 8;
  const strengthScore = strengths.length * 6;
  const cadenceScore = Math.min(habits, 5) * 5;
  const marketScore = marketMatches * 7;

  const total = passionScore + strengthScore + cadenceScore + marketScore;
  const normalized = Math.min(100, Math.round(total));

  return {
    normalized,
    color: normalized > 80 ? 'text-mentora-teal' : normalized > 60 ? 'text-amber-500' : 'text-rose-500',
    narrative:
      normalized > 80
        ? 'Momentum looks strong—Mentora recommends stretching goals + leadership pods.'
        : normalized > 60
          ? 'Solid stride. Layer in more feedback loops and mini-ships.'
          : 'Let’s rebuild the rituals that power your craft this month.',
  };
}

export function evaluatePathaway(steps = []) {
  const base = steps.reduce(
    (acc, step) => {
      if (typeof step.delta === 'number') {
        acc.score += step.delta;
        acc.trail.push({ title: step.title, move: step.choice, delta: step.delta });
        acc.skills.add(step.skill);
      }
      return acc;
    },
    { score: 50, trail: [], skills: new Set() },
  );

  const score = Math.min(100, Math.max(10, base.score));
  const tier = score > 80 ? 'Launcher' : score > 65 ? 'Builder' : 'Explorer';

  return {
    score,
    tier,
    skills: Array.from(base.skills),
    trail: base.trail,
    reflection: tier === 'Launcher'
      ? 'You made high-leverage choices under pressure—document the playbook for Pods.'
      : tier === 'Builder'
        ? 'Promising instincts. Add more validation rituals to increase signal.'
        : 'Curiosity unlocked—run a second attempt with mentor prompts.',
  };
}

export function generateUpcomingTasks(baseTasks = []) {
  const today = dayjs();
  return baseTasks.map((task, index) => ({
    ...task,
    id: `${task.label}-${index}`,
    targetDate: today.add(index + 1, 'day').format('ddd, MMM D'),
  }));
}
