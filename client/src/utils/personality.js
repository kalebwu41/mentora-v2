const traitArchetypes = {
  'Curious Builder': {
    traits: ['Exploratory', 'Collaborative', 'Resilient'],
    recommendations: [
      'Host a squad retro to turn insights into experiments.',
      'Document a “learning loop” after each Pathaway.',
      'Pair with a contrasting archetype inside Pods.',
    ],
  },
  'Calm Strategist': {
    traits: ['Analytical', 'Grounded', 'Systems'],
    recommendations: [
      'Own the KPI tracker inside Dashboard each Monday.',
      'Practice spontaneous brainstorms to stretch imagination.',
      'Lead a Pod critique session this month.',
    ],
  },
  'Spark Communicator': {
    traits: ['Expressive', 'Empathetic', 'Fast-moving'],
    recommendations: [
      'Balance storytelling sprints with deeper research hours.',
      'Record Loom reflections for mentors to review.',
      'Volunteer to summarize Pod debates.',
    ],
  },
};

export function inferArchetype(passions = []) {
  if (passions.includes('software') && passions.includes('design')) return 'Curious Builder';
  if (passions.includes('entrepreneurship')) return 'Calm Strategist';
  return 'Spark Communicator';
}

export function getArchetypeDetails(passions) {
  const archetype = inferArchetype(passions);
  return {
    archetype,
    ...traitArchetypes[archetype],
  };
}
