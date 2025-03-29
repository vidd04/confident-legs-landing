
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_30%_at_60%_40%,#e2f0fb,transparent)] opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-vein-darkGray animate-fade-up font-display">
              Confident legs start with clear, healthy veins.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Embrace lasting relief, guided by our 25+ years of expert vein care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-vein-blue hover:bg-vein-purple text-lg px-8 py-6">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-vein-blue text-vein-blue hover:bg-vein-lightBlue text-lg px-8 py-6">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="pt-8 flex justify-center lg:justify-start gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-vein-purple">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vein-purple">10k+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vein-purple">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Doctor examining patient's leg for vein treatment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-vein-purple text-white p-4 rounded-lg shadow-lg">
                <div className="text-xl font-bold">Board Certified</div>
                <div>Vascular Specialists</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
