
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-white pt-0 pb-12 md:pt-0 md:pb-16 -mt-[112px]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left pt-24 lg:pt-32">
            <h1 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-black tracking-[-0.02em] mb-6">
              Find Relief From Painful,
              <br />
              Unsightly Vein Conditions
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Our specialized treatments help restore healthy circulation and confidence, 
              with minimal discomfort and recovery time.
            </p>

            <Button className="bg-emergency-red text-white px-8 py-6 rounded-full inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors text-lg">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="relative aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-lg">
            <img 
              src="/src/assets/ChatGPT Image Mar 31, 2025, 04_10_39 PM.png"
              alt="Vein treatment expertise" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
