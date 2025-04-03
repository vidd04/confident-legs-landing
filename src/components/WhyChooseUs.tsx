import React from 'react';
import { Shield, Syringe, UserSquare2, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-emergency-red" />,
      title: "Covered By Insurance",
      description:
        "Most insurance plans accepted to help make your vein care more affordable.",
    },
    {
      icon: <Syringe className="w-6 h-6 text-emergency-red" />,
      title: "Non-Surgical Solutions",
      description:
        "Safe, effective, minimally invasive treatments to restore your leg health.",
    },
    {
      icon: <UserSquare2 className="w-6 h-6 text-emergency-red" />,
      title: "Personalized Treatment Plans",
      description:
        "Tailored care designed uniquely for you, ensuring optimal outcomes every step of the way.",
    },
    {
      icon: <Award className="w-6 h-6 text-emergency-red" />,
      title: "Proven Expertise",
      description:
        "Leverage over 25 years of advanced, expert vein care for healthier, happier legs.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F5F5] text-[#2C2C2C]">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col space-y-1.5">
              <div className="flex items-center gap-3">
                {feature.icon}
                <h3 className="text-base font-medium">{feature.title}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-9">
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
