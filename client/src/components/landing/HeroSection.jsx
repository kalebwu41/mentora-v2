import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
      {/* Hero Content */}
      <div className="max-w-4xl w-full text-center space-y-10">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
            Career Navigation<br />Powered by AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Interactive roadmaps, real-world projects, and mentorship that actually sticks.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            to="/roadmap"
            className="px-8 py-4 rounded-lg bg-[#2d8bba] text-white font-semibold text-lg hover:bg-[#045480] transition-colors duration-200 flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
          <Link
            to="/pathaways"
            className="px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:border-[#2d8bba] hover:text-[#2d8bba] transition-colors duration-200"
          >
            Explore Pathways
          </Link>
        </div>

        {/* Trust Logos */}
        <div className="pt-16 border-t border-gray-800">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
            Trusted by students from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-gray-400 font-semibold text-sm">MIT</div>
            <div className="text-gray-400 font-semibold text-sm">Stanford</div>
            <div className="text-gray-400 font-semibold text-sm">Harvard</div>
            <div className="text-gray-400 font-semibold text-sm">Berkeley</div>
            <div className="text-gray-400 font-semibold text-sm">CMU</div>
          </div>
        </div>
      </div>

      {/* Testimonials Section Below */}
      <div className="w-full max-w-4xl mt-32 pt-20 border-t border-gray-800 space-y-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-16 text-center">
            Trusted by Students
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed">
                "Mentora turned my career confusion into a structured 3-year plan. The Pods feedback changed everything."
              </p>
              <div>
                <p className="text-sm font-semibold text-white">Alex Chen</p>
                <p className="text-xs text-gray-500">CS Student, MIT</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-4">
              <p className="text-lg text-gray-200 leading-relaxed">
                "I've shipped more real work in 3 months than my whole freshman year. The pathways feel like actual internships."
              </p>
              <div>
                <p className="text-sm font-semibold text-white">Jordan Lee</p>
                <p className="text-xs text-gray-500">CTO, TechScale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
