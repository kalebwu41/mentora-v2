// server/services/roadmapService.js
async function generateRoadmap(prisma, userId) {
  const profile = await prisma.studentProfile.findFirst({ where: { userId } });
  if (!profile) return [];

  const blocks = await prisma.roadmapBlock.findMany({
    where: {
      minGrade: { lte: profile.gradeLevel },
      maxGrade: { gte: profile.gradeLevel },
      effortLevel: { lte: 4 } // simple workload filter for now
    }
  });

  // Add a simple reason for each block
  return blocks.map(b => ({
    ...b,
    reason: `Fits grade ${profile.gradeLevel} and workload`
  }));
}

module.exports = { generateRoadmap };
