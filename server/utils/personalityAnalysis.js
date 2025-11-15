const archetypes = {
  'Curious Builder': ['software', 'design'],
  'Empath Strategist': ['healthcare', 'marketing'],
  'Systems Pilot': ['mechanical', 'entrepreneurship'],
};

exports.inferArchetype = (passions = []) => {
  const match = Object.entries(archetypes).find(([, interests]) => interests.some((interest) => passions.includes(interest)));
  return match ? match[0] : 'Curious Builder';
};
