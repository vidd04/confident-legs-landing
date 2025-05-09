import React from 'react';
import treatmentImage from '../assets/iStock-541269710.jpg';
import consultationImage from '../assets/iarwK34NqSZMtnwJQpqn8R-1000-80.jpg';

const VeinInfo = () => {
  const symptoms = [
    { name: "Cramping Legs" },
    { name: "Aching or Heavy Legs" },
    { name: "Leg Swelling" },
    { name: "Itching and Tingling" },
    { name: "Poor Circulation" },
    { name: "Restless Legs" },
    { name: "Pain while standing" }
  ];

  return (
    <section id="vein-info" className="py-12 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-t-4 border-emergency-red w-32 mb-6"></div>
        <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-logo text-black mb-6 text-left">
          Vein Disease & Symptoms
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          Vein disease (chronic venous insufficiency) is common and often overlooked. It can cause pain, swelling, and visible veins, but also more subtle symptoms like heaviness or itching. Early treatment can prevent complications and improve your quality of life.
        </p>

        {/* Vein Types Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Varicose Veins */}
          <div className="bg-white px-0 py-4 md:p-6 shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 items-center w-full rounded-none md:rounded-lg">
            <img 
              src={treatmentImage}
              alt="Varicose veins on leg" 
              className="w-full h-40 object-cover object-center rounded-none md:w-32 md:h-32 md:rounded-md mb-4 md:mb-0"
            />
            <div className="flex-1 px-4 md:px-0">
              <h3 className="text-2xl font-logo text-black mb-2">Varicose Veins</h3>
              <p className="text-gray-700 mb-2">Swollen, twisted veins visible under the skin. Can cause pain, discomfort, and may lead to blood clots if untreated.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                <li>• Pain, heaviness, or throbbing</li>
                <li>• Swelling, especially after standing</li>
                <li>• Skin changes or ulcers in severe cases</li>
              </ul>
            </div>
          </div>
          {/* Spider Veins */}
          <div className="bg-white px-0 py-4 md:p-6 shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 items-center w-full rounded-none md:rounded-lg">
            <img 
              src={consultationImage}
              alt="Spider veins close-up" 
              className="w-full h-40 object-cover object-center rounded-none md:w-32 md:h-32 md:rounded-md mb-4 md:mb-0"
            />
            <div className="flex-1 px-4 md:px-0">
              <h3 className="text-2xl font-logo text-black mb-2">Spider Veins</h3>
              <p className="text-gray-700 mb-2">Small, web-like veins near the skin's surface. Usually cosmetic, but can cause aching or itching and may indicate poor circulation.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                <li>• Blue, purple, or red lines</li>
                <li>• Most common on legs or face</li>
                <li>• May be a sign of underlying vein issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Symptoms Section */}
        <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg mb-10">
          <h3 className="text-xl font-logo text-black mb-4">Common Symptoms of Vein Disease</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-[#F8F9FA] p-4 rounded">
                <div className="w-8 h-8 mb-2 bg-emergency-red/10 flex items-center justify-center rounded-full">
                  <div className="w-4 h-4 bg-emergency-red rounded-full"></div>
                </div>
                <p className="text-sm font-medium text-gray-800">{symptom.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-emergency-red/10 border border-emergency-red/20 p-8 rounded-lg text-center mt-8">
          <h4 className="text-xl font-logo text-emergency-red mb-2">Think you might have vein disease?</h4>
          <p className="text-gray-700 mb-4">If you recognize these symptoms, our specialists can help. Early treatment is key to relief and prevention.</p>
          <a href="tel:9143446743" className="bg-emergency-red text-white px-6 py-3 font-logo text-lg inline-block hover:bg-emergency-red/90 transition-colors" style={{ borderRadius: 0 }}>
            Call 914-344-6743 for a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default VeinInfo;
