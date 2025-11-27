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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated gradient overlay */}
      <Parallax offset={100}>
        <div className="absolute inset-0 bg-gradient-to-b from-mentora-primary/10 via-transparent to-transparent opacity-40" />
      </Parallax>

      {/* Subtle animated background elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 bg-mentora-primary/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-96 h-96 bg-mentora-accent/20 rounded-full blur-3xl"
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl text-center space-y-8">
          {/* Headline */}
          <SlideUpFadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-mentora-primary via-mentora-accent to-mentora-primary">
                AI-Powered Career Navigation.
              </span>
            </h1>
          </SlideUpFadeIn>

          {/* Subheadline */}
          <SlideUpFadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Interactive roadmaps, instant feedback, and internship-style tasks. Build your career blueprint with mentors and AI, not alone.
            </p>
          </SlideUpFadeIn>

          {/* CTA Buttons */}
          <ScaleAndFade delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-mentora-primary text-white font-semibold hover:shadow-lg hover:shadow-mentora-primary/50 transition-all duration-300 hover:scale-105"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                to="/pathaways"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-mentora-accent text-mentora-accent font-semibold hover:bg-mentora-accent/10 transition-all duration-300"
              >
                Explore Pathways <ArrowRight size={18} />
              </Link>
            </div>
          </ScaleAndFade>
        </div>
      </div>

      {/* Testimonials */}
      <TestimonialBubbles />

      {/* Trusted Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <TrustedBar />
      </div>
    </div>
  );
}
