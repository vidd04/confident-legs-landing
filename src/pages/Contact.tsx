import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-[112px]"> {/* Add padding to account for fixed navbar */}
        <AppointmentForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact; 