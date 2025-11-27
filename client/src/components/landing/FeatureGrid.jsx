import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlideUpFadeIn from '../animations/SlideUpFadeIn.jsx';

const features = [
  {
    title: 'AI Roadmap Engine',
    description: 'Weave your passions, local demand, and strengths into a multi-year personalized plan with weekly rituals.',
    icon: '🗺️',
  },
  {
    title: 'Interactive Pathways',
    description: 'Branching simulations that feel like internships—submit work, collect mentor feedback, iterate like a pro.',
    icon: '🎯',
  },
  {
    title: 'Pod Feedback',
    description: 'Guided professional rooms blending peer critique, industry mentors, and AI insights in real time.',
    icon: '🧠',
  },
  {
    title: 'Real Submissions',
    description: 'Upload files, links, and reflections—not multiple choice. Get feedback from humans who know the industry.',
    icon: '✨',
  },
  {
    title: 'Progress Tracking',
    description: 'Visual dashboards showing your growth across skills, completed milestones, and mentor connections.',
    icon: '📊',
  },
  {
    title: 'Offline Ready',
    description: 'All features work locally. Sync with the backend when your connection returns. Built for real life.',
    icon: '⚡',
  },
];

export default function FeatureGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SlideUpFadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-mentora-primary mb-4">
              Everything you need to succeed.
            </h2>
            <p className="text-lg text-mentora-muted max-w-2xl mx-auto">
              Built for ambitious students who want real feedback, real work, and a real career advantage.
            </p>
          </SlideUpFadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 border border-mentora-primary/10 hover:border-mentora-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, shadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-mentora-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-mentora-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
