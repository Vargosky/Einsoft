// src/app/page.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection/>      
      </div>
  );
};

export default HomePage;