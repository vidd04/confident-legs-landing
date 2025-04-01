
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, CircleDollarSign, FileText } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      name: "Endovenous Laser Treatment (EVLT)",
      description: "A minimally invasive procedure that uses laser energy to seal damaged veins. Performed in-office with minimal recovery time.",
      benefits: ["Quick 30-45 minute procedure", "Immediate return to normal activities", "High success rate"]
    },
    {
      name: "Sclerotherapy",
      description: "Injection of a solution that causes small and medium-sized varicose veins to collapse and fade. Ideal for spider veins and smaller varicose veins.",
      benefits: ["No anesthesia required", "Short treatment sessions", "Multiple veins treated in one visit"]
    },
    {
      name: "Ambulatory Phlebectomy",
      description: "Removal of larger surface veins through tiny skin punctures. Minimal scarring and discomfort with excellent cosmetic results.",
      benefits: ["Local anesthesia only", "No sutures needed", "Walk out of the office same day"]
    },
    {
      name: "Ultrasound-Guided Foam Sclerotherapy",
      description: "Advanced technique for treating veins that cannot be seen on the surface, using ultrasound guidance for precise treatment.",
      benefits: ["Targets hidden problem veins", "Non-surgical option", "Minimal discomfort"]
    }
  ];

  const insurances = [
    "Medicare", "Blue Cross Blue Shield", "Aetna", "United Healthcare", "Cigna", "Humana"
  ];

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] leading-tight font-normal text-black mb-6">
            Vein Treatments & Insurance Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer advanced, minimally invasive treatments for varicose and spider veins, 
            many of which are covered by insurance when medically necessary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <Card key={index} className="border border-gray-200">
              <CardHeader>
                <CardTitle>{treatment.name}</CardTitle>
                <CardDescription>{treatment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-emergency-red mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <CircleDollarSign className="text-emergency-red mr-3" size={28} />
                <h3 className="text-2xl font-medium">Insurance Coverage</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Many of our vein treatments are covered by insurance when deemed medically necessary. 
                Our team will work with you to determine your coverage and maximize your benefits.
              </p>
              <h4 className="font-medium mb-3">We accept most major insurance plans, including:</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {insurances.map((insurance, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="text-emergency-red mr-2 flex-shrink-0" size={16} />
                    <span>{insurance}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <FileText className="mr-2" size={18} />
                <span>We also offer flexible payment plans for cosmetic procedures.</span>
              </div>
              <Button className="bg-emergency-red text-white hover:bg-emergency-red/90">
                Verify Insurance Coverage
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-medium mb-4">Have Questions About Your Coverage?</h3>
              <p className="text-gray-600 mb-6">
                Our insurance specialists can help determine if your treatment will be covered and what your out-of-pocket costs might be.
              </p>
              <p className="text-gray-700 font-medium mb-2">Call us directly:</p>
              <a href="tel:(316)555-0116" className="text-emergency-red text-xl font-medium mb-6 hover:text-emergency-red/90">
                (316) 555-0116
              </a>
              <Button variant="outline" className="border-emergency-red text-emergency-red hover:bg-emergency-red/5">
                Schedule a Free Insurance Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
