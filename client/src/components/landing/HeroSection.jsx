import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="w-full min-h-[90vh] overflow-hidden relative bg-gradient-hero">
      {/* Optional hero media - place a `hero-loop.webm` file in `client/public/assets/` */}
      <video className="hero-video" playsInline autoPlay muted loop preload="auto">
        <source src="/assets/hero-loop.webm" type="video/webm" />
        <source src="/assets/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,155,213,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-[90vh] flex flex-col items-center justify-center px-6 py-24">
        {/* Main Content */}
        <div className="max-w-[900px] text-center space-y-10">
          {/* Serif Wordmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl lg:text-[96px] font-serif font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-mentora-accent to-mentora-accent-bright bg-clip-text text-transparent">
              Mentora
            </h1>

            {/* Subtle line accent */}
            <div className="flex justify-center">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-mentora-accent to-transparent opacity-40" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.15] tracking-tight text-mentora-text -tracking-[0.02em]"
          >
            Navigate Your Career with Intelligence
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl font-medium leading-relaxed text-mentora-text-secondary max-w-3xl mx-auto"
          >
            AI-powered roadmaps meet expert mentorship. Build skills that matter, ship real work, and accelerate your future.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
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
                Start Your Roadmap
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
                className="inline-flex items-center gap-2 px-10 py-4 text-[16px] font-semibold rounded-xl border-2 border-white/20 text-white hover:border-mentora-accent/60 hover:bg-mentora-accent/8 transition-all duration-200 backdrop-blur-sm"
              >
                Chat with AI
                <span className="text-lg">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-[16px] text-mentora-text-secondary font-medium pt-2"
          >
            ✨ No credit card required
          </motion.p>
        </div>

        {/* Bottom Section - Founders/Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-xs text-mentora-text-secondary uppercase tracking-widest mb-3 opacity-60">Built by</p>
          <p className="text-sm text-mentora-text-secondary font-medium">
            Dazhi Lu, Kaleb Wu, Sahil Mohammed
          </p>
        </motion.div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mentora-accent to-transparent opacity-20" />
      </div>
    </div>
  );
}
