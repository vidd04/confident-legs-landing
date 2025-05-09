import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, CircleDollarSign, FileText } from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      name: "Sclerotherapy",
      description: "A minimally invasive treatment for spider veins and small varicose veins.",
      benefits: [
        "Minimally invasive procedure",
        "Effective for spider veins",
        "Quick treatment sessions"
      ]
    },
    {
      name: "Endovenous Laser Treatment",
      description: "Advanced laser therapy for larger varicose veins with minimal recovery time.",
      benefits: [
        "Minimally invasive procedure",
        "Quick recovery time",
        "Effective for larger veins"
      ]
    },
    {
      name: "Vein Mapping & Assessment",
      description: "Comprehensive ultrasound evaluation to diagnose vein conditions.",
      benefits: [
        "Detailed vein evaluation",
        "Accurate diagnosis",
        "Personalized treatment planning"
      ]
    },
    {
      name: "Compression Therapy",
      description: "Professional compression solutions for ongoing vein health management.",
      benefits: [
        "Ongoing vein health management",
        "Professional fitting",
        "Preventive care"
      ]
    }
  ];

  const insurances = [
    "Medicare", "Blue Cross Blue Shield", "Aetna", "United Healthcare", "Cigna", "Humana"
  ];

  return (
    <section id="treatments" className="py-12 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-t-4 border-emergency-red w-32 mb-6"></div>
        <h2 className="flex flex-col text-[36px] md:text-[48px] leading-[1.2] text-black mb-16 font-logo">
          <span>Vein Treatments</span>
          <span>Insurance Coverage</span>
        
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <Card key={index} className="border border-gray-200 rounded-none">
              <CardHeader>
                <CardTitle className="text-xl font-logo text-black">{treatment.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{treatment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-logo text-black mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-emergency-red mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-8 shadow-sm border border-gray-200 rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <CircleDollarSign className="text-emergency-red mr-3" size={28} />
                <h3 className="text-xl font-logo text-black">Insurance Coverage</h3>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Many of our vein treatments are covered by insurance when deemed medically necessary. 
                Our team will work with you to determine your coverage and maximize your benefits.
              </p>
              <h4 className="text-sm font-logo text-black mb-3">We accept most major insurance plans, including:</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {insurances.map((insurance, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="text-emergency-red mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-600">{insurance}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <FileText className="mr-2" size={18} />
                <span>We also offer flexible payment plans for cosmetic procedures.</span>
              </div>
              <Button className="bg-emergency-red text-white hover:bg-emergency-red/90 font-logo" asChild>
                <a href="tel:9143446743">Verify Insurance Coverage</a>
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 flex flex-col justify-center">
              <h3 className="text-xl font-logo text-black mb-4">Have Questions About Your Coverage?</h3>
              <p className="text-sm text-gray-600 mb-6">
                Our insurance specialists can help determine if your treatment will be covered and what your out-of-pocket costs might be.
              </p>
              <p className="text-sm font-logo text-black mb-2">Call us directly:</p>
              <a href="tel:9143446743" className="bg-emergency-red text-white text-xl font-logo mb-3 hover:bg-emergency-red/90 px-4 py-2 w-full block text-center" style={{ borderRadius: 0 }}>
                914-344-6743
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
