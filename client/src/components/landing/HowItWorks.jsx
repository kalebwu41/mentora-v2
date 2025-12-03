import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Answer a few questions',
    description: 'Share your passions, skills, and career interests in a 5-minute onboarding.',
  },
  {
    title: 'Get your AI roadmap',
    description: 'Mentora generates a personalized 3-year plan with weekly milestones and skill targets.',
  },
  {
    title: 'Join a Pod',
    description: 'Connect with peers and industry mentors for weekly feedback, accountability, and real talk.',
  },
  {
    title: 'Ship your Pathways',
    description: 'Complete interactive projects, submit real work, and build a portfolio that stands out.',
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="w-full py-32 bg-gradient-neutral-reverse">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-[52px] font-bold text-mentora-text-dark mb-4 leading-tight">
              How It Works
            </h2>
            <p className="text-xl md:text-[22px] text-mentora-text-on-light max-w-[700px] mx-auto font-medium leading-relaxed">
              From first roadmap to shipped project in four simple steps.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 max-w-[1000px] mx-auto mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="relative flex gap-6"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex-shrink-0">
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-mentora-accent text-mentora-primary shadow-[0_4px_16px_rgba(255,182,55,0.25)]"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-black text-[28px]">{idx + 1}</span>
                </motion.div>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-semibold text-mentora-text-dark mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-mentora-text-on-light font-normal leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-10 py-4 text-[16px] font-semibold rounded-xl bg-mentora-accent text-mentora-primary hover:bg-mentora-accent-bright transition-all duration-200 shadow-button hover:shadow-button-hover"
            >
              Start Your Roadmap
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
