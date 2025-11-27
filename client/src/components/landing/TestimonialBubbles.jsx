import { motion } from 'framer-motion';
import FloatingElement from '../animations/FloatingElement.jsx';
import SlideUpFadeIn from '../animations/SlideUpFadeIn.jsx';

const testimonials = [
  {
    id: 'student-1',
    name: 'Alex Chen',
    role: 'CS Student @ MIT',
    avatar: '👤',
    quote: 'Mentora turned my career confusion into a structured 3-year plan. The Pods feedback changed everything.',
    side: 'left',
  },
  {
    id: 'mentor-1',
    name: 'Jordan Lee',
    role: 'CTO @ TechScale',
    avatar: '🎯',
    quote: 'Finally, a platform where students can ship real work and get mentorship that sticks.',
    side: 'right',
  },
];

export default function TestimonialBubbles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {testimonials.map((testimonial, idx) => (
        <FloatingElement key={testimonial.id} delay={idx * 0.2}>
          <SlideUpFadeIn delay={0.8 + idx * 0.3}>
            <motion.div
              className={`absolute ${testimonial.side === 'left' ? 'left-6 md:left-12' : 'right-6 md:right-12'} top-32 max-w-xs pointer-events-auto`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass-panel rounded-2xl p-4 shadow-lg backdrop-blur-md bg-white/80">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-mentora-primary">{testimonial.name}</p>
                    <p className="text-xs text-mentora-muted">{testimonial.role}</p>
                    <p className="text-xs mt-2 text-mentora-muted leading-relaxed">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SlideUpFadeIn>
        </FloatingElement>
      ))}
    </div>
  );
}
