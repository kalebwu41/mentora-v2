import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SlideUpFadeIn from '../animations/SlideUpFadeIn.jsx';
import ScaleAndFade from '../animations/ScaleAndFade.jsx';
import FloatIn from '../animations/FloatIn.jsx';
import Parallax from '../animations/Parallax.jsx';
import TestimonialBubbles from './TestimonialBubbles.jsx';
import TrustedBar from './TrustedBar.jsx';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-primary">
      {/* Animated gradient overlay */}
      <Parallax offset={100}>
        <div className="absolute inset-0 bg-gradient-to-b from-mentora-primary/20 via-transparent to-mentora-secondary/30 opacity-60" />
      </Parallax>

      {/* Subtle animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-mentora-secondary/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-96 h-96 bg-mentora-accent-light/25 rounded-full blur-3xl"
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl text-center space-y-8 w-full">
          {/* Brand Logo/Text - MENTORA DOMINANT */}
          <SlideUpFadeIn delay={0.1}>
            <div className="space-y-4">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter text-white drop-shadow-lg">
                MENTORA
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-mentora-secondary via-mentora-accent-bright to-mentora-secondary mx-auto" />
            </div>
          </SlideUpFadeIn>

          {/* Tagline */}
          <SlideUpFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white/95 leading-relaxed max-w-3xl mx-auto">
              AI-Powered Career Navigation
            </p>
          </SlideUpFadeIn>

          {/* Supporting text */}
          <SlideUpFadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Interactive roadmaps, instant feedback, and internship-style tasks. Build your career blueprint with mentors and AI, not alone.
            </p>
          </SlideUpFadeIn>

          {/* CTA Buttons */}
          <ScaleAndFade delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-mentora-secondary font-bold text-mentora-primary hover:shadow-lg hover:shadow-mentora-secondary/50 transition-all duration-300 hover:scale-105 text-lg"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/pathaways"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white/20 backdrop-blur border-2 border-white text-white font-bold hover:bg-white/30 transition-all duration-300 text-lg"
              >
                Explore Pathways <ArrowRight size={20} />
              </Link>
            </div>
          </ScaleAndFade>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialBubbles />

      {/* Trusted Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-mentora-primary to-transparent">
        <TrustedBar />
      </div>
    </div>
  );
}
