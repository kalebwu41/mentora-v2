import HeroSection from '../components/landing/HeroSection.jsx';
import FeatureGrid from '../components/landing/FeatureGrid.jsx';
import HowItWorks from '../components/landing/HowItWorks.jsx';
import CTA from '../components/landing/CTA.jsx';

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <CTA />
    </div>
  );
}
