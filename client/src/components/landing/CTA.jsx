import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="w-full py-32 relative overflow-hidden bg-gradient-hero">
      {/* Radial gradient accent at top */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,182,55,0.08)_0%,transparent_50%)]" />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,22,40,0.6)_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-[800px] mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl md:text-[56px] font-bold text-mentora-text mb-6 leading-[1.15] tracking-tight">
            Ready to Build Your Career Blueprint?
          </h2>
          <p className="text-xl md:text-[22px] text-mentora-text/80 mb-12 font-medium leading-relaxed">
            Join students from leading universities who are already shipping work and growing faster with Mentora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            {/* Primary CTA */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 px-10 py-4 text-[16px] font-semibold rounded-xl bg-mentora-accent text-mentora-primary hover:bg-mentora-accent-bright transition-all duration-200 shadow-button hover:shadow-button-hover"
              >
                Get Started Now
                <span className="text-lg">→</span>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/chatbot"
                className="inline-flex items-center gap-2 px-10 py-4 text-[16px] font-semibold rounded-xl border-2 border-white/25 text-white hover:border-mentora-accent/60 hover:bg-mentora-accent/10 transition-all duration-200 backdrop-blur-sm"
              >
                Chat with AI
                <span className="text-lg">→</span>
              </Link>
            </motion.div>
          </div>

          <p className="text-lg text-mentora-text/60 font-medium">
            ✨ No credit card required. Free to explore.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
