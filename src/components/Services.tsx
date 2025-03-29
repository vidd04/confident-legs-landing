
import React from 'react';
import { ArrowRight, Zap, ShieldCheck, Heart, Activity, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceItems = [
  {
    icon: <Zap size={36} className="text-vein-blue" />,
    title: "Sclerotherapy",
    description: "Non-surgical treatment for spider veins and small varicose veins using injectable solution.",
  },
  {
    icon: <Activity size={36} className="text-vein-blue" />,
    title: "Endovenous Laser Treatment",
    description: "Minimally invasive procedure using laser energy to treat larger varicose veins.",
  },
  {
    icon: <Heart size={36} className="text-vein-blue" />,
    title: "Vein Mapping & Assessment",
    description: "Comprehensive ultrasound evaluation to accurately diagnose vein conditions.",
  },
  {
    icon: <ShieldCheck size={36} className="text-vein-blue" />,
    title: "Compression Therapy",
    description: "Conservative management using medical-grade compression stockings for vein health.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-vein-lightBlue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Specialized Vein Services</h2>
          <p className="section-subtitle">
            Advanced treatments delivered with compassion, designed to improve both appearance and circulation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-vein-darkGray">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-flex items-center text-vein-blue hover:text-vein-purple font-medium">
                Learn more <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-vein-darkGray">Why Choose Our Vein Center?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="text-vein-purple mx-auto mb-4" size={36} />
              <h4 className="text-lg font-semibold mb-2">25+ Years Experience</h4>
              <p className="text-gray-600">Decades of specialized vascular expertise you can trust.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShieldCheck className="text-vein-purple mx-auto mb-4" size={36} />
              <h4 className="text-lg font-semibold mb-2">Board-Certified Specialists</h4>
              <p className="text-gray-600">Expert physicians with advanced training in vein care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Activity className="text-vein-purple mx-auto mb-4" size={36} />
              <h4 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h4>
              <p className="text-gray-600">State-of-the-art equipment for precise diagnosis and treatment.</p>
            </div>
          </div>
          <Button className="bg-vein-purple hover:bg-vein-blue text-white px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
