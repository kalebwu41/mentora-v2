import { multiYearBlueprint, opportunityLibrary, weeklyCadence, marketSignals } from '../data/roadmaps.js';
import { computeRoadmapScore } from './scoring.js';
import { getArchetypeDetails } from './personality.js';

function personalizeBlueprint(profile) {
  return multiYearBlueprint.map((year, index) => ({
    ...year,
    focus: `${year.focus} · anchored in ${profile.passions[index % profile.passions.length] || 'impact'}`,
    actions: year.actions.map((action, idx) =>
      idx === 0 ? `${action} — pair with ${profile.strengths[0] || 'core strength'}` : action,
    ),
  }));
}

function mergeMarketSignals(passions = []) {
  return marketSignals.filter((signal, idx) => idx < 2 || passions.includes('entrepreneurship'));
}

export function buildRoadmap(profile) {
  const blueprint = personalizeBlueprint(profile);
  const cadence = weeklyCadence.map((block) => ({
    ...block,
    blocks: block.blocks.map((item) => `${item} x ${profile.gradeLevel % 3 + 1}`),
  }));
  const archetypeDetails = getArchetypeDetails(profile.passions);
  const score = computeRoadmapScore({
    passions: profile.passions,
    strengths: profile.strengths,
    habits: profile.habits || 4,
    marketMatches: profile.localDemand || 2,
  });

  return {
    hero: {
      statement: `Mentora sees you as a ${archetypeDetails.archetype} ready to braid ${profile.passions.join(', ')} into a signature portfolio.`,
      score,
      archetypeDetails,
    },
    blueprint,
    opportunities: opportunityLibrary,
    cadence,
    market: mergeMarketSignals(profile.passions),
  };
}
