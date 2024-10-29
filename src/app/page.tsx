// src/app/page.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import { getProducto } from '@/api/library';
import ProductDetail from '@/components/producto/Producto';





const HomePage = () => {

  const producto = getProducto(2);
  console.log(producto);

  return (
    <div className="min-h-screen" >

      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );

};

export default HomePage;