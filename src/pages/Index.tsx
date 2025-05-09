import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ImagesBar from "@/components/ImagesBar";
// import Blog from '@/components/Blog';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ImagesBar />
      <FAQ />
      {/* <Blog /> moved to BlogArchive.tsx for later use */}
      <Footer />
    </div>
  );
};

export default Index;
