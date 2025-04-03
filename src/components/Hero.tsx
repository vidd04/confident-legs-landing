import React from 'react';
import { ArrowRight } from 'lucide-react';
import redLegsImage from "../assets/ChatGPT Image Apr 1, 2025, 12_08_00 PM.png";
const Hero = () => {
  return <section className="w-full relative -mt-[112px]">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF3B30] hidden lg:block" />
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-0">
          {/* Text Content */}
          <div className="flex flex-col justify-center pt-32 lg:pt-36 pb-4 lg:pb-6">
            <div className="lg:max-w-[540px]">
              <h1 className="text-[36px] md:text-[48px] leading-[1.2] text-black mb-4 font-semibold">
                Restore <span className="font-emphasis py-[23px] mx-0 px-0 font-normal text-7xl text-left">Healthy Leg</span> Function and Comfort
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience lasting relief and improved leg health—backed by our 25+ years of expert vein care.
              </p>
              <button className="bg-emergency-red text-white px-6 py-3 rounded-full inline-flex items-center gap-2 text-lg hover:bg-emergency-red/90 transition-all w-fit">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full bg-[#FF3B30] lg:bg-transparent pt-24 lg:pt-28">
            <img src={redLegsImage} alt="Healthy legs" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;