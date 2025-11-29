import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="w-full py-32 bg-gradient-to-br from-mentora-secondary via-mentora-primary to-mentora-secondary">
      <div className="content-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            Ready to Build Your Career Blueprint?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-semibold leading-relaxed">
            Join students from leading universities who are already shipping work and growing faster with Mentora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white font-bold text-mentora-primary hover:shadow-xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 text-lg"
            >
              Get Started Now <ArrowRight size={22} />
            </Link>
            <Link
              to="/chatbot"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full border-3 border-white text-white font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur text-lg"
            >
              Chat with AI <ArrowRight size={22} />
            </Link>
          </div>

          <p className="text-lg text-white/80 font-semibold">✨ No credit card required. Free to explore.</p>
        </motion.div>
      </div>
    </section>
  );
}
