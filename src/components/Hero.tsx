
import React from 'react';
import { ArrowRight, Plus, Clock, Stethoscope, Heart, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="bg-white pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-[32px] md:text-[48px] leading-[1.2] font-normal text-black tracking-[-0.02em] mb-6">
                Confident legs start with clear,
                <br />
                healthy veins
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                Let our 25+ years of expertise help you overcome leg pain and swelling with personalized, lasting solutions.
              </p>

              <button className="bg-emergency-red text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors text-lg">
                Discover our services
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Vein treatment expertise" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <div className="w-full">
        <div className="container max-lg:px-0">
          <div className="flex flex-row" style={{ gap: '1%' }}>
            <div className="w-[32.66%] aspect-[3/2] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical consultation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[32.66%] aspect-[3/2] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical procedure" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[32.66%] aspect-[3/2] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24247a210356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Medical facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conditions We Treat Section */}
      <section className="pb-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-8">
            <Plus className="text-emergency-red flex-shrink-0" />
            <h2 className="text-xl font-normal">Conditions We Treat</h2>
          </div>

          <h3 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-black tracking-[-0.02em] mb-6 max-w-[900px]">
            We are committed to providing expert, personalized, and compassionate vein care when you need it most.
          </h3>
          
          <p className="text-gray-600 text-lg mb-12 max-w-[900px]">
            When every detail matters, you need a team of experienced professionals you can rely on. Our highly trained vascular specialists provide comprehensive, state-of-the-art vein treatments, ensuring you receive the highest quality care with efficiency and expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f2f2f2] p-8 rounded-lg">
              <Clock className="text-emergency-red w-8 h-8 mb-6" />
              <h4 className="text-xl font-normal mb-4">Varicose Veins</h4>
              <p className="text-gray-600">Our team is always ready to provide expert treatment for painful or unsightly varicose veins.</p>
            </div>

            <div className="bg-[#f2f2f2] p-8 rounded-lg">
              <Stethoscope className="text-emergency-red w-8 h-8 mb-6" />
              <h4 className="text-xl font-normal mb-4">Spider Veins</h4>
              <p className="text-gray-600">Advanced treatments for small, visible surface veins with minimal recovery time.</p>
            </div>

            <div className="bg-[#f2f2f2] p-8 rounded-lg">
              <Heart className="text-emergency-red w-8 h-8 mb-6" />
              <h4 className="text-xl font-normal mb-4">Venous Insufficiency</h4>
              <p className="text-gray-600">Comprehensive care for chronic venous insufficiency and related symptoms.</p>
            </div>

            <div className="bg-[#f2f2f2] p-8 rounded-lg">
              <Shield className="text-emergency-red w-8 h-8 mb-6" />
              <h4 className="text-xl font-normal mb-4">Compression Therapy</h4>
              <p className="text-gray-600">Professional compression solutions for ongoing vein health management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why VeinCare Section */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="flex items-center gap-2">
              <Plus className="text-emergency-red flex-shrink-0" />
              <h2 className="text-xl font-normal">Why VeinCare?</h2>
            </div>
            <div>
              <h3 className="text-[32px] md:text-[40px] leading-[1.2] font-normal text-black tracking-[-0.02em] mb-6 break-words">
                We are committed to providing expert, personalized, and compassionate vein care when you need it most.
              </h3>
              <p className="text-gray-600 text-lg break-words">
                When it comes to vein health, every detail matters. Our highly trained vascular specialists provide comprehensive, state-of-the-art vein treatments, ensuring you receive the highest quality care with efficiency and expertise. We understand the impact that vein problems can have on your daily life, which is why we're dedicated to delivering lasting results through personalized treatment plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
