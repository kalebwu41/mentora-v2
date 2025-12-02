import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#2c5282_0%,transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Top Navigation - Explore Link */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Link
            to="/pathaways"
            className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-300 uppercase tracking-wider"
          >
            Explore →
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl text-center space-y-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-gray-900">
              Mentora
            </h1>

            {/* Subtle line accent */}
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-3xl mx-auto"
          >
            Intelligent career navigation powered by AI and expert mentorship
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Build your career with intelligent guidance, structured roadmaps, and mentorship from industry leaders.
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
              className="inline-block px-12 py-4 rounded-sm bg-gray-900 text-white font-semibold text-base hover:bg-gray-800 transition-colors duration-300 shadow-sm hover:shadow-md"
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
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 letter-spacing">Built by</p>
          <p className="text-sm text-gray-600 font-medium">
            Dazhi Lu, Kaleb Wu, Sahil Mohammed
          </p>
        </motion.div>

        {/* Bottom subtle accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </div>
  );
}
