
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert } from 'lucide-react';

const VeinInfo = () => {
  const symptoms = [
    "Aching or throbbing pain",
    "Leg heaviness or fatigue",
    "Itching around veins",
    "Swelling in lower legs",
    "Skin discoloration",
    "Restless legs",
    "Night cramps",
    "Visible bulging veins"
  ];
  
  return (
    <section id="vein-info" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-black mb-6">
            Understanding Varicose & Spider Veins
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These common vein conditions affect over 30% of adults, particularly those over 50, and can lead to discomfort and health complications if left untreated.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium text-black mb-6">What Are Varicose Veins?</h3>
            <p className="text-lg text-gray-600 mb-4">
              Varicose veins are enlarged, twisted veins that often appear blue or purple. They typically develop in the legs when vein valves malfunction, causing blood to pool instead of flowing efficiently back to the heart.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              While sometimes just a cosmetic concern, varicose veins can cause discomfort and lead to more serious problems if left untreated.
            </p>
            <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <Alert className="text-emergency-red flex-shrink-0 mr-3 mt-1" size={22} />
                <h4 className="text-xl font-medium">Spider Veins</h4>
              </div>
              <p className="text-gray-600">
                Spider veins are smaller, thread-like versions of varicose veins that appear closer to the skin's surface, often in a web-like pattern. They're typically red or blue and commonly found on the legs and face.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium text-black mb-6">Common Symptoms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-emergency-red mr-3"></div>
                      <p className="text-gray-700">{symptom}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 p-5 rounded-lg border border-blue-100">
              <p className="text-gray-700">
                <span className="font-medium">Not sure if you have vein issues?</span> Many people experience symptoms without realizing the cause. Our specialists can provide a thorough evaluation and diagnosis.
              </p>
              <button className="mt-4 bg-emergency-red text-white px-6 py-2 rounded-md hover:bg-emergency-red/90 transition-all inline-flex items-center text-sm font-medium">
                Request a Free Vein Screening
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeinInfo;
