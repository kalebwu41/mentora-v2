import { useState } from 'react';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { skillConstellation, taskQueue, podActivityPeek } from '../data/skills.js';
import { generateUpcomingTasks } from '../utils/scoring.js';

function TaskBoard() {
  const [tasks, setTasks] = useState(generateUpcomingTasks(taskQueue));
  const [dragging, setDragging] = useState(null);

  function handleDragStart(id) {
    setDragging(id);
  }

  function handleDragOver(e, targetId) {
    e.preventDefault();
    if (!dragging || dragging === targetId) return;
    const currentIndex = tasks.findIndex((task) => task.id === dragging);
    const targetIndex = tasks.findIndex((task) => task.id === targetId);
    const updated = [...tasks];
    const [moved] = updated.splice(currentIndex, 1);
    updated.splice(targetIndex, 0, moved);
    setTasks(updated);
  }

  function handleDrop() {
    setDragging(null);
  }

  return (
    <div className="rounded-3xl border border-mentora-primary/10 bg-white/80 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-mentora-accent">Upcoming Actions</p>
        <p className="text-xs text-mentora-muted">Drag to reorder</p>
      </div>
      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task.id)}
            onDragOver={(e) => handleDragOver(e, task.id)}
            onDrop={handleDrop}
            className="rounded-2xl border border-mentora-primary/10 bg-white px-4 py-3 text-sm shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold">{task.label}</p>
              <span className="text-xs text-mentora-muted">{task.targetDate}</span>
            </div>
            <p className="text-xs text-mentora-muted">
              Due: {task.due} · Impact: {task.impact}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-[minmax(0,_1.2fr),_360px]">
        <div className="rounded-3xl border border-mentora-primary/10 bg-white/90 p-6">
          <p className="text-sm font-semibold text-mentora-accent">Skill Map</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillConstellation}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#0B1C33', fontSize: 12 }} />
                <Radar name="Skill Levels" dataKey="score" stroke="#1A5FC1" fill="#1A5FC1" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <TaskBoard />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {podActivityPeek.map((pod) => (
          <div key={pod.pod} className="rounded-3xl border border-mentora-primary/10 bg-white/80 p-5">
            <p className="text-xs uppercase tracking-wide text-mentora-accent">{pod.pod}</p>
            <p className="mt-2 text-sm text-mentora-muted">{pod.highlight}</p>
            <div className="mt-4 flex gap-2 text-2xl">
              {pod.avatars.map((avatar) => (
                <span key={avatar} className="rounded-2xl bg-mentora-accent/10 px-3 py-1">
                  {avatar}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
