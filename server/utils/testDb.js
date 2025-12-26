const prisma = require('./prismaClient');

async function main() {
  const ts = Date.now();
  const email = `test+${ts}@example.com`;

  // Create a user with a nested StudentProfile
  const user = await prisma.user.create({
    data: {
      email,
      password: 'test-password',
      profile: {
        create: {
          gradeLevel: 11,
          gpaRange: '3.5-4.0',
          interests: 'AI, Design',
          strengths: 'Problem solving',
          weaknesses: 'Time management',
          timePerWeek: 8,
        },
      },
    },
    include: { profile: true },
  });

  console.log('Created user:', { id: user.id, email: user.email });

  // Create a roadmap block
  const block = await prisma.roadmapBlock.create({
    data: {
      title: 'Intro to AI Projects',
      type: 'project',
      minGrade: 9,
      maxGrade: 12,
      effortLevel: 3,
      description: 'Build a small AI project using Python and open-source models.',
    },
  });

  console.log('Created roadmap block:', { id: block.id, title: block.title });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
