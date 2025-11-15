module.exports = function evaluatePathaway(decisions = []) {
  let score = 50;
  const skills = new Set();

  decisions.forEach((decision) => {
    score += decision.delta || 0;
    if (decision.skill) skills.add(decision.skill);
  });

  const normalized = Math.max(10, Math.min(100, score));
  return {
    score: normalized,
    tier: normalized > 80 ? 'Launcher' : normalized > 65 ? 'Builder' : 'Explorer',
    skills: Array.from(skills),
    reflection: normalized > 80 ? 'Document and share this playbook.' : 'Re-run with mentor prompts soon.',
  };
};
