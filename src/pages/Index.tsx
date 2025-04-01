
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VeinInfo from "@/components/VeinInfo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Treatments from "@/components/Treatments";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VeinInfo />
      <WhyChooseUs />
      <Treatments />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default Index;
