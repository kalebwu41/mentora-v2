import { buildRoadmap } from '../utils/roadmapEngine.js';
import { podFeedSeed } from '../data/pods.js';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

async function safeFetch(path, options) {
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    if (!response.ok) throw new Error('Network error');
    return response.json();
  } catch (error) {
    console.warn('Falling back to local logic:', error.message);
    return null;
  }
}

export async function requestRoadmap(profile) {
  const data = await safeFetch('/roadmap', {
    method: 'POST',
    body: JSON.stringify(profile),
  });
  return data ?? buildRoadmap(profile);
}

export async function syncPathawayResult(payload) {
  const data = await safeFetch('/pathaway/result', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return data ?? { status: 'queued', ...payload };
}

export async function fetchPodFeed() {
  const data = await safeFetch('/pods/feed');
  return data ?? podFeedSeed;
}
