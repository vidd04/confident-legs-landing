import React from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';
import doctorImage from '../assets/Furqan-Tejani-MD.jpg';

const OurDoctor = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-t-4 border-emergency-red w-24 mb-4"></div>
        <h2 className="text-[32px] md:text-[40px] leading-tight font-logo text-black mb-12">
          Our Doctor
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <div>
            <img 
              src={doctorImage}
              alt="Dr. Furqan Tejani"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content Column */}
          <div className="flex flex-col">
            <h3 className="text-[28px] font-logo text-black mb-8">
              Furqan H. Tejani MD, FACC, FSCCT, FSCAI
            </h3>

            {/* Highlight Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-emergency-red/10 p-4 border border-emergency-red/20">
                <div className="text-emergency-red font-logo text-xl mb-1">Chief of Cardiology</div>
                <p className="text-gray-600 text-sm">Leading expert in cardiovascular care</p>
              </div>
              <div className="bg-emergency-red/10 p-4 border border-emergency-red/20">
                <div className="text-emergency-red font-logo text-xl mb-1">150+ Fellows</div>
                <p className="text-gray-600 text-sm">Trained & mentored medical professionals</p>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-600 mb-8 space-y-4">
              <p>
                After completing his cardiology training in New York, Dr. Tejani stayed to serve the community he calls home. Rising to become Chief of Cardiology at his training hospital, he went on to train over 150 fellows, participate in multi-center clinical trials, contribute to medical literature, and advise on emerging technologies.
              </p>
              <p>
                Dr. Tejani is recognized as a leading expert in venous disease, holding multiple patents and pioneering advanced treatments in cardiology and vascular care. He's been featured as a medical expert on national news outlets and continues to innovate in the field.
              </p>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-2 mb-6">
              <Globe2 className="text-emergency-red" size={20} />
              <span className="font-medium text-black">Languages spoken:</span>
              <span className="text-gray-600">English, Russian, Spanish</span>
            </div>

            {/* Status & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-600">Now accepting new patients</span>
              </div>
              <button className="bg-emergency-red text-white px-6 py-3 rounded-full inline-flex items-center gap-2 text-lg hover:bg-emergency-red/90 transition-all">
                Schedule Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctor; 