import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import { skillConstellation, taskQueue, podActivityPeek } from '../data/skills.js';
import { generateUpcomingTasks } from '../utils/scoring.js';
import { AnimatedCard, StaggerContainer, SectionTitle } from '../components/animations/index.jsx';
import MOTION from '../utils/motionConfig.js';

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
    <motion.div
      className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] p-5"
      {...MOTION.transitions.slideUpFade()}
      whileHover={MOTION.hover.lift}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[var(--accent)]">Upcoming Actions</p>
        <p className="text-xs text-[var(--text-secondary)]">Drag to reorder</p>
      </div>
      <motion.ul className="mt-4 space-y-3" variants={MOTION.staggerContainer(0.05)} initial="hidden" animate="visible">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task.id)}
            onDragOver={(e) => handleDragOver(e, task.id)}
            onDrop={handleDrop}
            className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--surface)] px-4 py-3 text-sm shadow-sm cursor-move"
            variants={MOTION.staggerChild}
            whileHover={{ x: 4, ...MOTION.hover.shadow }}
          >
            <div className="flex items-center justify-between">
              <p className="font-semibold text-[var(--text-primary)]">{task.label}</p>
              <span className="text-xs text-[var(--text-secondary)]">{task.targetDate}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Due: {task.due} · Impact: {task.impact}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <SectionTitle>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">Your Dashboard</h1>
      </SectionTitle>

      <div className="grid gap-6 md:grid-cols-[minmax(0,_1.2fr),_360px]">
        <AnimatedCard className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] p-6">
          <p className="text-sm font-semibold text-[var(--accent)]">Skill Map</p>
          <motion.div className="mt-4 h-72" animate={MOTION.continuous.pulse(3)}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillConstellation}>
                <PolarGrid stroke="rgba(242, 246, 252, 0.1)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: 'var(--text-primary)', fontSize: 12 }} />
                <Radar name="Skill Levels" dataKey="score" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.2} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatedCard>
        <TaskBoard />
      </div>

      <StaggerContainer delay={0.08}>
        <div className="grid gap-4 md:grid-cols-2">
          {podActivityPeek.map((pod) => (
            <motion.div
              key={pod.pod}
              className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--surface)] p-5"
              variants={MOTION.staggerChild}
              whileHover={MOTION.hover.lift}
            >
              <p className="text-xs uppercase tracking-wide text-[var(--accent)]">{pod.pod}</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{pod.highlight}</p>
              <motion.div className="mt-4 flex gap-2 text-2xl">
                {pod.avatars.map((avatar) => (
                  <motion.span
                    key={avatar}
                    className="rounded-2xl bg-[var(--accent)]/10 px-3 py-1"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                  >
                    {avatar}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
