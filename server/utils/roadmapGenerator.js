const personality = require('./personalityAnalysis');
const { interestScore } = require('./aiEngine');

function mapYear(grade, profile) {
  const focusAreas = ['Exploration', 'Momentum', 'Leadership', 'Launch'];
  return {
    grade: `Grade ${grade}`,
    focus: `${focusAreas[(grade - 9) % focusAreas.length]} · ${profile.passions[0] || 'Impact'}`,
    actions: [
      `Ship a mini-project tied to ${profile.passions[0] || 'curiosity'}`,
      `Share progress inside ${profile.passions[1] || 'pods'} Pod`,
      'Log reflections + mentor feedback',
    ],
  };
}

module.exports = function generateRoadmap(profile) {
  const archetype = personality.inferArchetype(profile.passions || []);
  const score = interestScore(profile);

  return {
    hero: {
      archetype,
      statement: `Mentora sees you as a ${archetype} ready to orchestrate ${profile.passions?.join(', ') || 'your craft'}.`,
      score,
    },
    blueprint: [9, 10, 11, 12].map((grade) => mapYear(grade, profile)),
    cadence: [
      { label: 'Deep Work', blocks: ['Research', 'Prototype', 'Debrief'] },
      { label: 'Community', blocks: ['Pod critique', 'Mentor AMA'] },
    ],
  };
};
