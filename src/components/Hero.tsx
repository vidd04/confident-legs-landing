import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full relative -mt-[112px] bg-[#FFF5F2]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF3B30] hidden lg:block" />
      
      <div className="container px-8 md:px-12 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          {/* Text Content */}
          <div className="flex flex-col justify-center pt-32 lg:pt-36 pb-20 lg:pb-24">
            <div className="lg:max-w-[540px]">
              <h1 className="flex flex-col text-[36px] md:text-[48px] leading-[1.2] text-black mb-4 font-logo">
                <span>Healthy Veins</span>
                <span>Healthy Legs</span>
                <span>Healthy You</span>
              </h1>
              <p className="flex flex-col text-lg text-gray-600 mb-8">
                <span>Experience lasting relief and improved leg health.</span>
                <span>—backed by our 25+ years of expert vein care.</span>
              </p>
              <button className="bg-emergency-red text-white px-6 py-3 rounded-full inline-flex items-center gap-2 text-lg hover:bg-emergency-red/90 transition-all w-fit">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-full hidden lg:block">
            <div className="absolute top-[100px] right-0 w-full max-w-[500px] aspect-square">
              <img 
                src="/src/assets/Adobe Express - file (1).png" 
                alt="Leg close-up showing varicose veins" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
