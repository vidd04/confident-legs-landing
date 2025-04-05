import React from 'react';
import { Shield, Syringe, UserSquare2 } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-emergency-red" />,
      title: "Covered By Insurance",
      description:
        "Most insurance plans accepted to help make your vein care more affordable.",
    },
    {
      icon: <Syringe className="w-8 h-8 text-emergency-red" />,
      title: "Non-Surgical Solutions",
      description:
        "Safe, effective, minimally invasive treatments to restore your leg health.",
    },
    {
      icon: <UserSquare2 className="w-8 h-8 text-emergency-red" />,
      title: "Personalized Treatment Plans",
      description:
        "Tailored care designed uniquely for you, ensuring optimal outcomes every step of the way.",
    }
  ];

  return (
    <section className="w-full bg-[#F5F5F5] text-[#2C2C2C]">
      <div className="container px-8 md:px-12 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-center gap-4">
                {feature.icon}
                <h3 className="text-xl font-medium">{feature.title}</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed pl-12">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
