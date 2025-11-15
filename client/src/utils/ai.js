const suggestionPool = [
  'Spin up a 7-day shipping streak, documenting every micro-lesson.',
  'Pair with a pod mentor outside your focus and synthesize the contrasts.',
  'Add a “why now” paragraph to your Pathaway deliverable for more punch.',
  'Host a lunchtime lab at school that mirrors what you learned here.',
];

export function mentorReply(message, context = {}) {
  const lower = message.toLowerCase();
  let tone = 'Here’s how I’m thinking about this';

  if (lower.includes('stuck') || lower.includes('blocked')) {
    tone = 'Let’s unstick this together';
  } else if (lower.includes('win') || lower.includes('excited')) {
    tone = 'Yes! Celebrate this momentum';
  }

  const roadmapRef = context.roadmap?.hero?.statement ?? 'your current blueprint';
  const suggestion = suggestionPool[Math.floor(Math.random() * suggestionPool.length)];

  return `${tone}. Your signals still align with ${roadmapRef}. ${suggestion}.`;
}
