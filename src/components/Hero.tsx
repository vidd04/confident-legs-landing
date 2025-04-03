
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full relative -mt-[112px] bg-[#FDE1D3]">
      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center pt-32 lg:pt-36 pb-20 lg:pb-24 max-w-[800px] mx-auto text-center">
            <h1 className="text-[40px] md:text-[56px] leading-[1.2] text-black mb-6 font-semibold">
              Restore <span className="font-emphasis py-[23px] mx-0 px-0 font-normal text-7xl block text-emergency-red">Healthy Leg</span> Function and Comfort
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-[600px] mx-auto">
              Experience lasting relief and improved leg health—backed by our 25+ years of expert vein care.
            </p>
            <div className="flex justify-center">
              <button className="bg-emergency-red text-white px-8 py-4 rounded-full inline-flex items-center gap-2 text-lg hover:bg-emergency-red/90 transition-all">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom curve */}
      <div className="w-full h-16 bg-white rounded-t-[50%] mt-4"></div>
    </section>
  );
};

export default Hero;
