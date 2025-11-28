import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import PersonaForm from '../components/roadmap/PersonaForm.jsx';
import RoadmapCanvas from '../components/roadmap/RoadmapCanvas.jsx';
import { requestRoadmap } from '../services/api.js';
import { useUser } from '../context/UserContext.jsx';
import { SectionTitle, MOTION } from '../components/animations/index.js';

export default function Roadmap() {
  const { user, updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(user.savedRoadmap);

  async function handleGenerate(payload) {
    setLoading(true);
    const data = await requestRoadmap(payload);
    setRoadmap(data);
    updateUser({ savedRoadmap: data });
    toast.success('Roadmap refreshed with the latest signal.');
    setLoading(false);
  }

  return (
    <div>
      <SectionTitle title="Your Roadmap" subtitle="Personalized learning path mapped to your goals" />
      <motion.div
        className="grid gap-8 lg:grid-cols-[360px,_1fr]"
        {...MOTION.transitions.slideUpFade(0)}
      >
        <PersonaForm onSubmit={handleGenerate} loading={loading} />
        <RoadmapCanvas data={roadmap} />
      </motion.div>
    </div>
  );
}
