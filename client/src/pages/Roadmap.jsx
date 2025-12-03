import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import PersonaForm from '../components/roadmap/PersonaForm.jsx';
import RoadmapCanvas from '../components/roadmap/RoadmapCanvas.jsx';
import { requestRoadmap } from '../services/api.js';
import { useUser } from '../context/UserContext.jsx';

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
    <div className="w-full min-h-screen bg-gradient-neutral py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-[52px] font-extrabold text-mentora-text-dark mb-4 leading-tight">
            Your Roadmap
          </h1>
          <p className="text-xl md:text-[22px] text-mentora-text-on-light max-w-[700px] mx-auto font-semibold leading-relaxed">
            Personalized learning path mapped to your goals, powered by AI insights
          </p>
        </motion.div>

        {/* Form & Canvas Grid */}
        <motion.div
          className="grid gap-8 lg:grid-cols-[420px_1fr]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <PersonaForm onSubmit={handleGenerate} loading={loading} />
          <RoadmapCanvas data={roadmap} />
        </motion.div>
      </div>
    </div>
  );
}
