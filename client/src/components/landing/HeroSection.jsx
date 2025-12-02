import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-black mb-6">
          Mentora
        </h1>

        {/* Main Tagline */}
        <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-12">
          Career navigation powered by AI, mentors, and real-world projects.
        </p>

        {/* Testimonials */}
        <div className="space-y-8 mb-12">
          {/* Testimonial 1 */}
          <blockquote className="space-y-2">
            <p className="text-lg text-gray-800 leading-relaxed">
              "Mentora turned my career confusion into a structured 3-year plan. The Pods feedback changed everything."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              — Alex Chen, CS Student @ MIT
            </p>
          </blockquote>

          {/* Testimonial 2 */}
          <blockquote className="space-y-2">
            <p className="text-lg text-gray-800 leading-relaxed">
              "Finally, a platform where students can ship real work and get mentorship that sticks. Interactive roadmaps, instant feedback, and internship-style tasks."
            </p>
            <p className="text-sm text-gray-600 font-medium">
              — Jordan Lee, CTO @ TechScale
            </p>
          </blockquote>
        </div>

        {/* Supporting Text */}
        <p className="text-lg text-gray-800 mb-10">
          Build your career blueprint with mentors and AI, not alone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            to="/roadmap"
            className="px-8 py-3 rounded-lg bg-[#2d8bba] text-white font-bold text-base hover:bg-[#045480] transition-colors duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/pathaways"
            className="px-8 py-3 rounded-lg border-2 border-[#2d8bba] text-[#2d8bba] font-bold text-base hover:bg-[#2d8bba] hover:text-white transition-colors duration-200"
          >
            Explore Pathways
          </Link>
        </div>
      </div>
    </div>
  );
}
