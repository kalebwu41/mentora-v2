import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-12">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">
          Mentora
        </h1>

        {/* Main Tagline */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
          Career navigation powered by AI, mentors, and real-world projects.
        </p>

        {/* Testimonials */}
        <div className="space-y-10 border-t border-gray-700 pt-10">
          {/* Testimonial 1 */}
          <blockquote className="space-y-4">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              "Mentora turned my career confusion into a structured 3-year plan. The Pods feedback changed everything."
            </p>
            <p className="text-sm text-gray-500">
              — Alex Chen, CS Student @ MIT
            </p>
          </blockquote>

          {/* Testimonial 2 */}
          <blockquote className="space-y-4">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              "Finally, a platform where students can ship real work and get mentorship that sticks. Interactive roadmaps, instant feedback, and internship-style tasks."
            </p>
            <p className="text-sm text-gray-500">
              — Jordan Lee, CTO @ TechScale
            </p>
          </blockquote>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-700" />

        {/* Supporting Text */}
        <p className="text-lg text-gray-300 leading-relaxed">
          Build your career blueprint with mentors and AI, not alone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-3 pt-4">
          <Link
            to="/roadmap"
            className="px-6 py-3 rounded-md bg-[#2d8bba] text-white font-medium text-base hover:bg-[#045480] transition-colors duration-150"
          >
            Get Started
          </Link>
          <Link
            to="/pathaways"
            className="px-6 py-3 rounded-md border border-gray-600 text-gray-200 font-medium text-base hover:border-[#2d8bba] hover:text-[#2d8bba] transition-colors duration-150"
          >
            Explore Pathways
          </Link>
        </div>
      </div>
    </div>
  );
}
