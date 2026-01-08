async function generateRoadmap(prisma, userId) {
  const profile = await prisma.studentProfile.findFirst({ where: { userId } });
  if (!profile) return [];

  const blocks = await prisma.roadmapBlock.findMany({
    where: {
      minGrade: { lte: profile.gradeLevel },
      maxGrade: { gte: profile.gradeLevel },
      effortLevel: { lte: 4 } 
    }
  });

  return blocks.map(b => ({
    ...b,
    reason: `Fits grade ${profile.gradeLevel} and workload`
  }));
}

module.exports = { generateRoadmap };
