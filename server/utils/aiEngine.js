const phrases = [
  'Ship a reflective note inside Pods',
  'Layer in one more user interview',
  'Document the learning before moving on',
];

exports.respond = (message, context = {}) => {
  const archetype = context?.roadmap?.hero?.archetype || 'builder';
  return `Mentora (${archetype}) hears: "${message}". Suggestion: ${phrases[Math.floor(Math.random() * phrases.length)]}.`;
};

exports.interestScore = (profile = {}) => {
  const base = (profile.passions?.length || 1) * 15 + (profile.strengths?.length || 1) * 10;
  return Math.min(100, base);
};
