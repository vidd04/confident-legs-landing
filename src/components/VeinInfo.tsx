import React from 'react';
import treatmentImage from '../assets/iStock-541269710.jpg';
import consultationImage from '../assets/iarwK34NqSZMtnwJQpqn8R-1000-80.jpg';

const VeinInfo = () => {
  const symptoms = [
    { name: "Cramping Legs", icon: "cramping" },
    { name: "Aching or Heavy Legs", icon: "aching" },
    { name: "Leg Swelling", icon: "swelling" },
    { name: "Itching and Tingling", icon: "itching" },
    { name: "Poor Circulation", icon: "circulation" },
    { name: "Restless Legs", icon: "restless" },
    { name: "Pain while standing", icon: "standing" }
  ];

  return (
    <section id="vein-info" className="py-12 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-t-4 border-emergency-red w-32 mb-6"></div>
        <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-logo text-black mb-16 text-left">
          Vein Disease and Symptoms
        </h2>

        {/* Statistics and Info Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="flex gap-4">
            {/* Statistics Box */}
            <div className="bg-emergency-red p-4 shadow-md w-[240px]">
              <div className="flex flex-col">
                <p className="text-2xl font-logo text-white">Approximately 25% of Americans</p>
                <p className="text-lg text-white/90">live with vein disease</p>
              </div>
            </div>
            {/* Info Box */}
            <div className="bg-white p-4 shadow-sm border border-gray-100 flex-1">
              <p className="text-sm text-gray-600">
                Vein disease, also known as venous insufficiency, occurs when veins have trouble sending blood from the legs back to the heart. This condition is closely related to varicose veins and can lead to serious health issues if left untreated.
              </p>
            </div>
          </div>
        </div>

        {/* Vein Types Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Varicose Veins */}
          <div className="bg-white p-4 shadow-sm border border-gray-100">
            <div className="mb-3">
              <img 
                src={treatmentImage}
                alt="Varicose veins on leg" 
                className="w-full h-[120px] object-cover object-center rounded-lg"
              />
            </div>
            <div className="flex flex-col h-[calc(100%-136px)]">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-lg font-logo text-black">Varicose Veins</h3>
                  <p className="text-sm text-gray-600">Swollen, twisted veins visible under the skin.</p>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-emergency-red"></div>
                    <span>Can cause pain and discomfort</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-emergency-red"></div>
                    <span>May lead to blood clots if untreated</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-emergency-red hover:text-emergency-red/80 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </div>

          {/* Spider Veins */}
          <div className="bg-white p-4 shadow-sm border border-gray-100">
            <div className="mb-3">
              <img 
                src={consultationImage}
                alt="Spider veins close-up" 
                className="w-full h-[120px] object-cover object-center rounded-lg"
              />
            </div>
            <div className="flex flex-col h-[calc(100%-136px)]">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-lg font-logo text-black">Spider Veins</h3>
                  <p className="text-sm text-gray-600">Small, web-like veins near skin's surface.</p>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-emergency-red"></div>
                    <span>Usually cosmetic but can be symptomatic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-emergency-red"></div>
                    <span>May indicate poor circulation</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-sm text-emergency-red hover:text-emergency-red/80 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="bg-white p-4 shadow-sm border border-gray-100">
          <h3 className="text-lg font-logo text-black mb-3">Common Symptoms</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-[#F8F9FA] p-2">
                <div className="w-10 h-10 mb-2 bg-[#E8F4FF] flex items-center justify-center">
                  <div className="w-5 h-5 bg-emergency-red/20"></div>
                </div>
                <p className="text-xs font-medium text-gray-800">{symptom.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeinInfo;
