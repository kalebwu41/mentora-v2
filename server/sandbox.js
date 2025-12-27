
const { generateRoadmap } = require('./services/roadmapService');

let prisma;
try {
  prisma = require('./utils/prismaClient');
} catch (err) {
  console.warn('Prisma client failed to load; using in-memory mock for sandbox:', err.message);
  const db = { users: [], profiles: [], blocks: [] };
  let id = 1;
  prisma = {
    user: {
      create: async ({ data }) => {
        const u = { id: id++, ...data, createdAt: new Date() };
        db.users.push(u);
        return u;
      },
      findMany: async ({ include } = {}) =>
        include?.profile
          ? db.users.map(u => ({ ...u, profile: db.profiles.find(p => p.userId === u.id) }))
          : db.users
    },
    studentProfile: {
      create: async ({ data }) => {
        const p = { id: id++, ...data };
        db.profiles.push(p);
        return p;
      },
      findFirst: async ({ where }) => db.profiles.find(p => p.userId === where.userId) || null
    },
    roadmapBlock: {
      createMany: async ({ data }) => {
        const created = data.map(d => {
          const b = { id: id++, ...d };
          db.blocks.push(b);
          return b;
        });
        return { count: created.length };
      },
      findMany: async ({ where }) =>
        db.blocks.filter(
          b =>
            b.minGrade <= where.minGrade.lte &&
            b.maxGrade >= where.maxGrade.gte &&
            b.effortLevel <= where.effortLevel.lte
        )
    },
    $disconnect: async () => {}
  };
}

async function main() {
  const user = await prisma.user.create({
    data: { email: 'student1@mentora.com', password: 'hashed-password' }
  });

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

  // Create roadmap blocks
  await prisma.roadmapBlock.createMany({
    data: [
      { title: 'Build a Personal Project', type: 'Project', minGrade: 10, maxGrade: 12, effortLevel: 4, description: 'Create a CS project you can showcase.' },
      { title: 'SAT Prep Basics', type: 'Test Prep', minGrade: 9, maxGrade: 11, effortLevel: 3, description: 'Study SAT fundamentals weekly.' },
      { title: 'College List Research', type: 'Planning', minGrade: 11, maxGrade: 12, effortLevel: 2, description: 'Research and categorize colleges.' }
    ]
  });

  // Use the extracted service
  const roadmap = await generateRoadmap(prisma, user.id);
  console.log('Eligible roadmap blocks via service:');
  roadmap.forEach(block => console.log(`✔ ${block.title}: ${block.reason}`));

  // Optional: see all users with profiles
  const allUsers = await prisma.user.findMany({ include: { profile: true } });
  console.log('\nAll users and profiles:');
  console.log(JSON.stringify(allUsers, null, 2));
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect());
