import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SlideUpFadeIn, ScaleAndFade } from '../animations/index.jsx';

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 md:py-32">
        <div className="content-container max-w-4xl">
          {/* Title - YC Style */}
          <SlideUpFadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-mentora-primary mb-6">
              Mentora
            </h1>
          </SlideUpFadeIn>

          {/* Tagline - Crisp and Clear */}
          <SlideUpFadeIn delay={0.2}>
            <p className="text-xl md:text-2xl font-semibold text-mentora-text mb-8 max-w-2xl">
              Career navigation powered by AI, mentors, and real-world projects.
            </p>
          </SlideUpFadeIn>

          {/* Testimonials Section */}
          <SlideUpFadeIn delay={0.3}>
            <div className="space-y-6 mb-12 pb-12 border-b border-mentora-text/10">
              {/* Testimonial 1 */}
              <div className="space-y-2">
                <p className="text-lg text-mentora-text leading-relaxed">
                  <span className="font-semibold text-mentora-primary">"Mentora feels like having a personal chief-of-staff."</span> Instead of trying everything, I now have a clear roadmap with weekly milestones. The feedback loop is real.
                </p>
                <p className="text-sm text-mentora-text-light font-medium">
                  — Alex Chen, Stanford, CS + Design
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="space-y-2">
                <p className="text-lg text-mentora-text leading-relaxed">
                  <span className="font-semibold text-mentora-primary">"I've shipped more real work in 3 months than my whole freshman year."</span> The pathways feel like actual internships, not just assignments. And the Pod feedback actually changes how I think.
                </p>
                <p className="text-sm text-mentora-text-light font-medium">
                  — Jordan Lee, MIT, 2025
                </p>
              </div>
            </div>
          </SlideUpFadeIn>

          {/* CTA Buttons */}
          <ScaleAndFade delay={0.4}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-mentora-primary text-white font-bold hover:bg-mentora-primary-dark transition-all duration-300 hover:shadow-lg"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                to="/pathaways"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-mentora-primary text-mentora-primary font-bold hover:bg-mentora-primary/5 transition-all duration-300"
              >
                Explore Pathways <ArrowRight size={18} />
              </Link>
            </div>
          </ScaleAndFade>
        </div>
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mentora-primary to-transparent opacity-20" />
    </div>
  );
}
