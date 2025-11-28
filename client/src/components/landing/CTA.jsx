import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="w-full py-24 bg-gradient-to-br from-mentora-primary/5 to-mentora-accent/5">
      <div className="content-container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mentora-primary mb-6">
            Ready to build your career blueprint?
          </h2>
          <p className="text-lg text-mentora-muted mb-8">
            Join students from leading universities who are already shipping work and growing faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-mentora-primary text-white font-semibold hover:shadow-lg hover:shadow-mentora-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get Started Now <ArrowRight size={18} />
            </Link>
            <Link
              to="/chatbot"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-mentora-primary text-mentora-primary font-semibold hover:bg-mentora-primary/10 transition-all duration-300"
            >
              Chat with AI <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-sm text-mentora-muted mt-6">No credit card required. Free to explore.</p>
        </motion.div>
      </div>
    </section>
  );
}
