import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import VeinInfo from "@/components/VeinInfo";
import Treatments from "@/components/Treatments";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ImagesBar from "@/components/ImagesBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ImagesBar />
      <VeinInfo />
      <Treatments />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
