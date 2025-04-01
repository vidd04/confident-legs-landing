import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Heart, Activity, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Sclerotherapy",
    description: "A minimally invasive treatment for spider veins and small varicose veins.",
    icon: <Zap size={36} className="text-emergency-red" />,
  },
  {
    title: "Endovenous Laser Treatment",
    description: "Advanced laser therapy for larger varicose veins with minimal recovery time.",
    icon: <Activity size={36} className="text-emergency-red" />,
  },
  {
    title: "Vein Mapping & Assessment",
    description: "Comprehensive ultrasound evaluation to diagnose vein conditions.",
    icon: <Heart size={36} className="text-emergency-red" />,
  },
  {
    title: "Compression Therapy",
    description: "Professional compression solutions for ongoing vein health management.",
    icon: <ShieldCheck size={36} className="text-emergency-red" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Specialized Vein Services</h2>
          <p className="section-subtitle">
            Advanced treatments delivered with compassion, designed to improve both appearance and circulation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-emergency-red hover:text-emergency-red/90 font-medium">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Award className="text-emergency-red mx-auto mb-4" size={36} />
            <h3 className="text-lg font-bold mb-2">Expert Care</h3>
            <p className="text-gray-600">Board-certified specialists with extensive vein treatment experience.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <ShieldCheck className="text-emergency-red mx-auto mb-4" size={36} />
            <h3 className="text-lg font-bold mb-2">Safe & Effective</h3>
            <p className="text-gray-600">State-of-the-art treatments with proven results and minimal downtime.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Activity className="text-emergency-red mx-auto mb-4" size={36} />
            <h3 className="text-lg font-bold mb-2">Personalized Care</h3>
            <p className="text-gray-600">Customized treatment plans tailored to your specific needs.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-emergency-red hover:bg-emergency-red/90 text-white px-8 py-6 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
