// Set a local engine preference before importing the generated client so the
// runtime uses an in-process engine instead of requiring a remote driver
// adapter or accelerate URL. This should be set before the `@prisma/client`
// module is loaded.
process.env.PRISMA_CLIENT_ENGINE_TYPE = process.env.PRISMA_CLIENT_ENGINE_TYPE || 'library';

let PrismaClient
try {
	// Prefer the generated client inside the repository when available.
	// This ensures the runtime is configured with the schema/config used during `prisma generate`.
	const generated = require('../generated/prisma')
	PrismaClient = generated.PrismaClient || generated.default?.PrismaClient || generated.default
} catch (e) {
	// Fallback to installed @prisma/client package if generated client isn't present.
	const pkg = require('@prisma/client')
	PrismaClient = pkg.PrismaClient || pkg.default?.PrismaClient || pkg.default
}

// Construct PrismaClient once and share across the server process.
const prisma = new PrismaClient()

module.exports = prisma
