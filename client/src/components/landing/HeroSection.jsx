import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-600/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Top Navigation - Explore Link */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/pathaways"
            className="text-sm font-semibold text-gray-100 hover:text-cyan-300 transition-colors duration-200 uppercase tracking-wider"
          >
            Explore →
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl text-center space-y-8">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-4 relative"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight">
              <span className="text-white">Mentora</span>
            </h1>

            {/* Animated glow effect on title */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-0 pointer-events-none"
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl md:text-3xl font-semibold text-gray-100 leading-relaxed"
          >
            Your Personal AI Career Coach
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Interactive roadmaps, real-world projects, and mentorship that actually sticks.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="pt-6"
          >
            <Link
              to="/roadmap"
              className="inline-block px-10 py-4 rounded-lg bg-cyan-400 text-blue-900 font-bold text-lg hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Bottom Section - Founders/Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="absolute bottom-8 left-0 right-0 text-center"
        >
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Built by</p>
          <p className="text-gray-200 font-medium">
            Dazhi Lu, Kaleb Wu, Sahil Mohammed
          </p>
        </motion.div>

        {/* Animated accent lines */}
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-cyan-400"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-24 right-1/4 w-2 h-2 rounded-full bg-blue-300"
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 1,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent pointer-events-none" />
    </div>
  );
}
