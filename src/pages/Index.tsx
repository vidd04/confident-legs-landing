import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import VeinInfo from "@/components/VeinInfo";
import Treatments from "@/components/Treatments";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ImagesBar from "@/components/ImagesBar";
import Locations from '@/components/Locations';
import OurDoctor from '@/components/OurDoctor';
import Blog from '@/components/Blog';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ImagesBar />
      <VeinInfo />
      <Treatments />
      <Testimonials />
      <OurDoctor />
      <Locations />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
