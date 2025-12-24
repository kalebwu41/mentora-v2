// Set a local engine preference before importing the generated client so the
// runtime uses an in-process engine instead of requiring a remote driver
// adapter or accelerate URL. This should be set before the `@prisma/client`
// module is loaded.
process.env.PRISMA_CLIENT_ENGINE_TYPE = process.env.PRISMA_CLIENT_ENGINE_TYPE || 'library';

// Prefer the published package entrypoint; it wires the generated runtime options
// and works regardless of where the client runtime files are located.
const { PrismaClient } = require('@prisma/client');

// Construct PrismaClient once and share across the server process.
const prisma = new PrismaClient();

module.exports = prisma;
