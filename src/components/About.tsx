
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical team at Vein Center" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-xl font-bold text-vein-blue">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="section-title text-left mb-6">About Our Vein Center</h2>
            <p className="text-gray-600 mb-6">
              For over 25 years, our dedicated team has been at the forefront of vascular health, 
              providing expert care with a compassionate approach. We combine the latest treatment 
              technologies with decades of specialized experience to offer personalized solutions for 
              every patient.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-vein-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-vein-darkGray">Board-Certified Specialists</h4>
                  <p className="text-gray-600">Our physicians possess specialized training in vascular medicine and surgery.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-vein-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-vein-darkGray">Minimally Invasive Procedures</h4>
                  <p className="text-gray-600">Offering effective treatments with minimal downtime and excellent results.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-vein-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-bold text-vein-darkGray">Personalized Care Plans</h4>
                  <p className="text-gray-600">We develop individualized treatment strategies based on your specific needs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-vein-lightBlue p-6 rounded-lg">
              <h4 className="font-bold text-vein-darkGray mb-2">Our Mission</h4>
              <p className="text-gray-600">
                To improve our patients' quality of life through expert vein care, delivered with 
                compassion, integrity, and clinical excellence. We're committed to helping you 
                achieve both healthier legs and renewed confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
