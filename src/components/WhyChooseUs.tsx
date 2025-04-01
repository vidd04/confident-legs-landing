
import React from 'react';
import { Award, UserCheck, Heart, ShieldCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-emergency-red" />,
      title: "Board-Certified Specialist",
      description: "Dr. Tejani brings over 25 years of specialized vein treatment experience, with advanced training in the latest minimally invasive techniques."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-emergency-red" />,
      title: "Personalized Care",
      description: "We take the time to understand your specific concerns and develop a customized treatment plan tailored to your needs and lifestyle."
    },
    {
      icon: <Heart className="w-12 h-12 text-emergency-red" />,
      title: "Patient-Focused Approach",
      description: "Our practice is built around patient comfort, education, and satisfaction. We walk you through every step of your treatment journey."
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-emergency-red" />,
      title: "Advanced Treatment Options",
      description: "We offer state-of-the-art, minimally invasive procedures with less pain and shorter recovery times than traditional vein surgeries."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-black mb-6">
              Why Choose Dr. Tejani at VeinRelief Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At VeinRelief Solutions, Dr. Tejani and our dedicated team are committed to providing the highest quality vein care in a comfortable, patient-centered environment.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-medium mb-3">Patient Stories</h3>
              <p className="text-gray-600 italic mb-4">
                "After years of leg pain and embarrassment from varicose veins, Dr. Tejani's treatment was life-changing. I can finally wear shorts again and enjoy walking without pain!"
              </p>
              <p className="text-gray-500 text-sm">— Maria, 58</p>
            </div>
            <button className="mt-8 bg-emergency-red text-white px-8 py-3 rounded-md hover:bg-emergency-red/90 transition-all inline-flex items-center font-medium">
              Meet Dr. Tejani
            </button>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-medium mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium mb-2">Ready to take the first step?</h3>
                  <p className="text-gray-600">Schedule a consultation with Dr. Tejani today.</p>
                </div>
                <button className="mt-4 md:mt-0 bg-emergency-red text-white px-6 py-3 rounded-md hover:bg-emergency-red/90 transition-all inline-flex items-center font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
