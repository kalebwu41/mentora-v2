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
    <section ref={ref} className="w-full py-32 bg-gradient-to-b from-mentora-accent via-mentora-accent-bright to-mentora-accent">
      <div className="content-container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-semibold">
              From first roadmap to shipped project in 4 simple steps.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-mentora-secondary via-mentora-secondary-light to-mentora-secondary border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="font-black text-2xl text-mentora-primary">{idx + 1}</span>
                  </motion.div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-lg text-white/85 font-medium">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/roadmap"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-mentora-secondary font-bold text-mentora-primary hover:shadow-lg hover:shadow-mentora-secondary/50 transition-all duration-300 hover:scale-105 text-lg"
          >
            Start Your Roadmap <ArrowRight size={22} />
          </Link>
        </div>
      </div>
    </section>
  );
}
