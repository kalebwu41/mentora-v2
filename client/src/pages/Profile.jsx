import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Chip from '../components/ui/Chip.jsx';
import { useUser } from '../context/UserContext.jsx';
import { SectionTitle, AnimatedCard, StaggerContainer, MOTION } from '../components/animations/index.jsx';

export default function Profile() {
  const { user, updateUser } = useUser();
  const [bio, setBio] = useState('Mapping stories into systems that change schools.');

  function handleSave() {
    updateUser({ bio });
    toast.success('Profile saved.');
  }

  return (
    <div>
      <SectionTitle title="Profile" subtitle="Manage your skills, passions & goals" />
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          className="glass-panel rounded-3xl p-6 space-y-4"
          {...MOTION.transitions.slideUpFade(0)}
        >
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ x: 4 }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mentora-accent/15 text-xl font-semibold">
              {user.name?.slice(0, 2) ?? 'ME'}
            </span>
            <div>
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-sm text-mentora-muted">Grade {user.gradeLevel}</p>
            </div>
          </motion.div>
          <textarea
            className="min-h-[120px] w-full rounded-2xl border border-mentora-primary/10 bg-white/80 px-4 py-3 text-sm focus:border-mentora-accent focus:outline-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <motion.button
            onClick={handleSave}
            className="rounded-full btn"
            whileHover={MOTION.hover.lift}
            whileTap={{ scale: 0.95 }}
          >
            Save profile
          </motion.button>
        </motion.div>
        <StaggerContainer staggerDelay={0.08}>
          <motion.div
            className="rounded-3xl border border-mentora-primary/10 bg-white/80 p-5"
            variants={MOTION.staggerContainer(0)}
          >
            <p className="text-xs uppercase tracking-wide text-mentora-accent">Passions</p>
            <motion.div className="mt-3 flex flex-wrap gap-2">
              {user.passions.map((passion, idx) => (
                <motion.div
                  key={passion}
                  variants={MOTION.staggerContainer(0).children}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip label={passion} tone="sand" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-3xl border border-mentora-primary/10 bg-white/80 p-5"
            variants={MOTION.staggerContainer(0)}
          >
            <p className="text-xs uppercase tracking-wide text-mentora-accent">Strengths</p>
            <motion.div className="mt-3 flex flex-wrap gap-2">
              {user.strengths.map((strength) => (
                <motion.div
                  key={strength}
                  variants={MOTION.staggerContainer(0).children}
                  whileHover={{ scale: 1.05 }}
                >
                  <Chip label={strength} tone="teal" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </StaggerContainer>
      </div>
    </div>
  );
}
