import { motion } from 'framer-motion';
import SlideUpFadeIn from '../animations/SlideUpFadeIn.jsx';

const institutions = [
  { name: 'MIT', emoji: '🎓' },
  { name: 'UT Austin', emoji: '⭐' },
  { name: 'Rice', emoji: '🏛️' },
  { name: 'Stanford', emoji: '🌲' },
  { name: 'Berkeley', emoji: '🐻' },
];

export default function TrustedBar() {
  return (
    <SlideUpFadeIn delay={1.2}>
      <div className="border-t border-mentora-primary/10 bg-white/40 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-mentora-muted mb-6">
            Trusted by students from leading schools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {institutions.map((inst) => (
              <motion.div
                key={inst.name}
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ brightness: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xl">{inst.emoji}</span>
                <span className="text-sm font-semibold text-mentora-muted">{inst.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideUpFadeIn>
  );
}
