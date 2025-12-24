let prisma;
try {
  prisma = require('./utils/prismaClient');
} catch (err) {
  console.warn('Prisma client failed to load; using in-memory mock for sandbox:', err.message);
  // Minimal in-memory mock to allow the sandbox to run without a working Prisma client.
  const db = { users: [], profiles: [], blocks: [] };
  let id = 1;
  prisma = {
    user: {
      create: async ({ data }) => {
        const u = { id: id++, email: data.email, password: data.password, createdAt: new Date() };
        db.users.push(u);
        return u;
      },
      findMany: async ({ include } = {}) => {
        if (include && include.profile) {
          return db.users.map((u) => ({ ...u, profile: db.profiles.find((p) => p.userId === u.id) }));
        }
        return db.users;
      },
    },
    studentProfile: {
      create: async ({ data }) => {
        const p = { id: id++, ...data };
        db.profiles.push(p);
        return p;
      },
      findFirst: async ({ where }) => db.profiles.find((p) => p.userId === where.userId) || null,
    },
    roadmapBlock: {
      createMany: async ({ data }) => {
        const created = data.map((d) => {
          const b = { id: id++, ...d };
          db.blocks.push(b);
          return b;
        });
        return { count: created.length };
      },
      findMany: async ({ where }) => db.blocks.filter((b) => b.minGrade <= where.minGrade.lte && b.maxGrade >= where.maxGrade.gte && b.effortLevel <= where.effortLevel.lte),
    },
    $disconnect: async () => {},
  };
}

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      email: 'student1@mentora.com',
      password: 'hashed-password'
    }
  });

  // Create the student profile linked to the user
  await prisma.studentProfile.create({
    data: {
      userId: user.id,
      gradeLevel: 11,
      gpaRange: '3.7–4.0',
      interests: 'computer science, startups',
      strengths: 'math, problem-solving',
      weaknesses: 'writing',
      timePerWeek: 8
    }
  });
  await prisma.roadmapBlock.createMany({
  data: [
    {
      title: 'Build a Personal Project',
      type: 'Project',
      minGrade: 10,
      maxGrade: 12,
      effortLevel: 4,
      description: 'Create a CS project you can showcase.'
    },
    {
      title: 'SAT Prep Basics',
      type: 'Test Prep',
      minGrade: 9,
      maxGrade: 11,
      effortLevel: 3,
      description: 'Study SAT fundamentals weekly.'
    },
    {
      title: 'College List Research',
      type: 'Planning',
      minGrade: 11,
      maxGrade: 12,
      effortLevel: 2,
      description: 'Research and categorize colleges.'
    }
  ]
});
const profile = await prisma.studentProfile.findFirst({
  where: { userId: user.id }
});

const eligibleBlocks = await prisma.roadmapBlock.findMany({
  where: {
    minGrade: { lte: profile.gradeLevel },
    maxGrade: { gte: profile.gradeLevel },
    effortLevel: { lte: 4 } // simple capacity rule for now
  }
});

console.log('Eligible roadmap blocks:');
eligibleBlocks.forEach(block => {
  console.log(
    `✔ ${block.title} (grade ${block.minGrade}-${block.maxGrade}, effort ${block.effortLevel})`
  );
});


  const result = await prisma.user.findMany({
    include: {
      profile: true
    }
  });

  console.log(JSON.stringify(result, null, 2));
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
