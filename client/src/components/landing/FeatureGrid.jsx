import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'AI Roadmap Engine',
    description: 'Weave your passions, local demand, and strengths into a personalized multi-year plan with weekly milestones.',
    icon: '🗺️',
  },
  {
    title: 'Interactive Pathways',
    description: 'Branching simulations that mirror real internships—submit work, collect mentor feedback, iterate like a pro.',
    icon: '🎯',
  },
  {
    title: 'Pod Feedback',
    description: 'Structured feedback rooms blending peer critique, industry mentors, and AI insights in real time.',
    icon: '🧠',
  },
  {
    title: 'Real Submissions',
    description: 'Upload portfolios, links, and reflections—not multiple choice. Get feedback from humans who know your field.',
    icon: '✨',
  },
  {
    title: 'Progress Tracking',
    description: 'Visual dashboards showing skill growth, completed milestones, and expanding mentor connections.',
    icon: '📊',
  },
  {
    title: 'Offline Ready',
    description: 'Work anywhere. All features sync locally and update when you reconnect. Built for real student life.',
    icon: '⚡',
  },
];

export default function FeatureGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-32 bg-gradient-neutral">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-[52px] font-extrabold text-mentora-text-dark mb-4 leading-tight">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl md:text-[22px] text-mentora-text-on-light max-w-[700px] mx-auto font-semibold leading-relaxed">
              Built for ambitious students who want real feedback, real work, and a real career advantage.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="rounded-[20px] bg-white border border-mentora-text-dark/[0.08] p-10 shadow-card hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-mentora-text-dark mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[16px] text-mentora-text-on-light leading-[1.65] font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
