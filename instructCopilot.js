/**
 * Script: instructCopilot.js
 * Purpose: Provide Copilot context for connecting backend roadmap API
 *          to a new frontend roadmap page dynamically.
 *
 * Usage: node instructCopilot.js
 */

const fs = require('fs');
const path = require('path');

// 1. Path to your frontend page
const frontendPage = path.join(__dirname, 'frontend', 'roadmap.html');

// 2. Path to backend roadmap controller & routes
const backendController = path.join(__dirname, 'server', 'controllers', 'roadmapController.js');
const backendRoutes = path.join(__dirname, 'server', 'routes', 'roadmapRoutes.js');

// 3. Instructions for Copilot
const instructions = `
You are GitHub Copilot.

Task:
- Connect the backend roadmap API (generateRoadmap service) to the frontend roadmap page.
- The frontend page should fetch roadmap blocks dynamically from /api/roadmap?userId={userId}.
- Add skills tags for each block in the frontend (example: 'javascript', 'python', 'java').
- Ensure the backend controller returns JSON with fields: title, description, minGrade, maxGrade, effortLevel, reason, skills.
- Update the frontend to render cards with this data, including title, description, grade info, effort, reason, and skills.
- Use YC-grade modern design and color styling.
- Make the code modular so new roadmap blocks are automatically displayed without further frontend edits.

Files to modify:
- ${frontendPage}
- ${backendController}
- ${backendRoutes}

Generate the full code for these files with the requested changes.
`;

// 4. Output instructions to a file for Copilot context
const instructionsFile = path.join(__dirname, 'copilot_instructions.txt');
fs.writeFileSync(instructionsFile, instructions, 'utf8');

console.log(`Instructions for Copilot written to ${instructionsFile}`);
console.log('Open the file and use Copilot to generate the updated code automatically.');
