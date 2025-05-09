import React from 'react';
import Navbar from "@/components/Navbar";
import Treatments from "@/components/Treatments";
import Footer from "@/components/Footer";

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Treatments />
      <Footer />
    </div>
  );
};

export default TreatmentsPage; 