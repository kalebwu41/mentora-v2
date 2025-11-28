import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Answer a few questions',
    description: 'Tell us about your passions, skills, and career interests.',
  },
  {
    title: 'Get your AI roadmap',
    description: 'Mentora generates a personalized 3-year plan with weekly milestones.',
  },
  {
    title: 'Join a Pod',
    description: 'Connect with peers and mentors for weekly feedback and accountability.',
  },
  {
    title: 'Ship your Pathways',
    description: 'Complete interactive projects, submit real work, and build your portfolio.',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="content-container">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-mentora-primary mb-4">
              How it works.
            </h2>
            <p className="text-lg text-mentora-muted max-w-2xl mx-auto">
              From first roadmap to shipped project in 4 simple steps.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-mentora-primary/10 border border-mentora-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-bold text-mentora-primary">{idx + 1}</span>
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mentora-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-mentora-muted">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-mentora-primary text-white font-semibold hover:shadow-lg hover:shadow-mentora-primary/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Roadmap <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
