import BgGradient from '@/components/common/BgGradient';
import DemoSection from '@/components/home/DemoSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';

export default function HomePage() {
  return (
    <div className="relative w-full">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorks />
      </div>
    </div>
  );
}
