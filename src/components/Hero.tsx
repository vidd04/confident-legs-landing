
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full relative -mt-[112px] bg-[#FFF5F2] pb-16">
      <div className="container relative">
        <div className="flex flex-col items-center text-center pt-36 pb-8">
          <div className="max-w-[780px] mx-auto">
            <h1 className="text-[40px] md:text-[56px] leading-[1.2] text-black mb-6 font-semibold">
              Restore <span className="font-emphasis block py-3 text-[52px] md:text-7xl font-medium text-emergency-red">
                Healthy Veins<br />
                Healthy Legs<br />
                Healthy You.
              </span> Function and Comfort
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-[640px] mx-auto">
              Experience lasting relief and improved leg health—backed by our 25+ years of expert vein care.
            </p>
            <button className="bg-emergency-red text-white px-8 py-4 rounded-full inline-flex items-center gap-2 text-lg hover:bg-emergency-red/90 transition-all w-fit mx-auto">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[50%] w-[120%] -ml-[10%]"></div>
    </section>
  );
};

export default Hero;
