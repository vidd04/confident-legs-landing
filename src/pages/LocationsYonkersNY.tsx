import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Locations from '@/components/Locations';
import OurDoctor from '@/components/OurDoctor';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/Adobe Express - file (1).png';

const YonkersHero = () => (
  <section className="w-full relative -mt-[112px] bg-[#FFF5F2]">
    <Helmet>
      <title>Yonkers Vein Relief | Vein Doctor & Vein Clinic in Yonkers, NY | Westchester Vein Specialist</title>
      <meta name="description" content="Yonkers Vein Relief is the top-rated vein doctor and vein clinic in Yonkers, NY. We offer varicose vein treatment, spider vein care, and minimally invasive procedures for Westchester County. Book your consultation today!" />
      <meta name="keywords" content="Yonkers Vein Relief, vein treatment Yonkers, varicose veins Yonkers NY, spider veins Yonkers, vein doctor Yonkers, vein clinic Yonkers, best vein specialist Yonkers, insurance vein treatment Yonkers" />
      <link rel="canonical" href="https://veinrelief.com/locations/yonkers-ny" />
      <meta property="og:title" content="Yonkers Vein Relief | Vein Treatment in Yonkers, NY" />
      <meta property="og:description" content="Yonkers Vein Relief is the top-rated vein clinic in Yonkers, NY. We provide expert care for varicose veins, spider veins, and more. Schedule your appointment today!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://veinrelief.com/locations/yonkers-ny" />
      <meta property="og:image" content="https://veinrelief.com/assets/Adobe%20Express%20-%20file%20(1).png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Yonkers Vein Relief | Vein Treatment in Yonkers, NY" />
      <meta name="twitter:description" content="Yonkers Vein Relief is the top-rated vein clinic in Yonkers, NY. We provide expert care for varicose veins, spider veins, and more. Schedule your appointment today!" />
      <meta name="twitter:image" content="https://veinrelief.com/assets/Adobe%20Express%20-%20file%20(1).png" />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "name": "Yonkers Vein Relief",
          "image": "https://veinrelief.com/assets/Adobe%20Express%20-%20file%20(1).png",
          "@id": "https://veinrelief.com/locations/yonkers-ny",
          "url": "https://veinrelief.com/locations/yonkers-ny",
          "telephone": "914-344-6743",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "984 N Broadway Suite LL03",
            "addressLocality": "Yonkers",
            "addressRegion": "NY",
            "postalCode": "10701",
            "addressCountry": "US"
          },
          "description": "Yonkers Vein Relief offers expert vein treatment, varicose vein care, and minimally invasive procedures in Yonkers, NY.",
          "openingHours": "Mo-Fr 09:00-17:00"
        }
      `}</script>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Yonkers Vein Relief located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are located at 984 N Broadway Suite LL03, Yonkers, NY 10701. Our clinic is easily accessible for all Yonkers and Westchester County residents."
              }
            },
            {
              "@type": "Question",
              "name": "What vein treatments do you offer in Yonkers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide minimally invasive treatments for varicose veins, spider veins, and chronic venous insufficiency, including sclerotherapy, endovenous laser therapy, and more."
              }
            },
            {
              "@type": "Question",
              "name": "Is vein treatment covered by insurance?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many vein treatments are covered by insurance when medically necessary. Our Yonkers team will help you verify your coverage and maximize your benefits."
              }
            },
            {
              "@type": "Question",
              "name": "How do I schedule a consultation at Yonkers Vein Relief?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Call us at 914-344-6743 or use our online form to request an appointment. We welcome new patients from Yonkers and the surrounding area!"
              }
            }
          ]
        }
      `}</script>
    </Helmet>
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF3B30] hidden lg:block" />
    <div className="container px-8 md:px-12 lg:px-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] lg:grid-cols-2 items-start">
        {/* Text Content */}
        <div className="flex flex-col justify-center pt-32 lg:pt-36 pb-20 lg:pb-24 md:pr-8">
          <div className="max-w-full md:max-w-[420px] lg:max-w-[540px]">
            <h1 className="flex flex-col text-[36px] md:text-[40px] lg:text-[48px] leading-[1.2] text-black mb-4 font-logo">
              <span>Yonkers Vein Relief</span>
              <span>Expert Vein Treatment in Westchester</span>
            </h1>
            <div className="mt-2 bg-[#ffb3b3] text-black font-logo italic text-sm sm:text-base md:text-lg px-4 py-2 mb-4 w-fit shadow whitespace-nowrap" style={{ borderRadius: 0, fontStyle: 'italic' }}>
              1,000+ Patients Helped by Our Doctors
            </div>
            <p className="flex flex-col text-xl sm:text-lg md:text-base text-gray-600 mb-8">
              <span>Top-rated vein clinic for varicose veins, spider veins, and minimally invasive procedures for Yonkers & Westchester County residents.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center mb-6">
              <a href="tel:9143446743" className="bg-emergency-red text-white px-6 py-3 inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl hover:bg-emergency-red/90 transition-all w-fit font-logo whitespace-nowrap" style={{ borderRadius: 0 }}>
                914-344-6743
              </a>
              <a href="https://maps.app.goo.gl/3rRE8KvHyG3a3buQA" target="_blank" rel="noopener noreferrer" className="border border-black text-black px-6 py-3 inline-flex items-center gap-2 text-base sm:text-lg hover:bg-gray-100 hover:text-gray-600 transition-all w-fit font-logo" style={{ borderRadius: 0 }}>
                Click to get directions
              </a>
            </div>
          </div>
        </div>
        {/* Image Column */}
        <div className="relative h-full hidden lg:block">
          <div className="absolute top-[100px] right-0 w-full max-w-[500px] aspect-square">
            <img 
              alt="Yonkers Vein Relief clinic, vein doctor, and vein treatment in Yonkers NY"
              className="w-full h-full object-cover rounded-lg"
              src={heroImage}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const YonkersFAQ = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-8 md:px-12 lg:px-16">
      <h2 className="flex items-center gap-3 text-[32px] md:text-[40px] font-logo text-black mb-8">
        <span className="flex items-center justify-center h-full">
          <span className="w-4 h-4 bg-emergency-red/10 flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-emergency-red"></span>
          </span>
        </span>
        Yonkers Vein Relief FAQ
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Where is Yonkers Vein Relief located?</h3>
          <p className="text-gray-700">We are located at 984 N Broadway Suite LL03, Yonkers, NY 10701. Our clinic is easily accessible for all Yonkers and Westchester County residents.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">What vein treatments do you offer in Yonkers?</h3>
          <p className="text-gray-700">We provide minimally invasive treatments for varicose veins, spider veins, and chronic venous insufficiency, including sclerotherapy, endovenous laser therapy, and more.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">Is vein treatment covered by insurance?</h3>
          <p className="text-gray-700">Many vein treatments are covered by insurance when medically necessary. Our Yonkers team will help you verify your coverage and maximize your benefits.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black mb-2">How do I schedule a consultation at Yonkers Vein Relief?</h3>
          <p className="text-gray-700">Call us at <a href="tel:9143446743" className="text-emergency-red font-semibold">914-344-6743</a> or use our online form to request an appointment. We welcome new patients from Yonkers and the surrounding area!</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseYonkers = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-8 md:px-12 lg:px-16">
      <h2 className="flex items-center gap-3 text-[32px] md:text-[40px] font-logo text-black mb-8">
        <span className="flex items-center justify-center h-full">
          <span className="w-4 h-4 bg-emergency-red/10 flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-emergency-red"></span>
          </span>
        </span>
        Why Choose Us in Yonkers?
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">Board-Certified Vein Specialist</span>
          <span className="text-gray-700">Your care is led by a highly trained, board-certified vein doctor with years of experience treating vein conditions in Yonkers and Westchester County.</span>
        </li>
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">Comprehensive, Coordinated Care</span>
          <span className="text-gray-700">We work closely with local dermatologists and podiatrists, making it easy for you to get all your vein, skin, and foot care needs addressed in one place. We help coordinate referrals and appointments for a seamless experience.</span>
        </li>
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">One-Stop Shop for Vein & Related Care</span>
          <span className="text-gray-700">From diagnosis to treatment and follow-up, we offer a full range of services under one roof, so you don't have to travel between multiple offices.</span>
        </li>
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">Advanced, Minimally Invasive Treatments</span>
          <span className="text-gray-700">We use the latest technology for varicose and spider vein treatment, ensuring fast recovery and excellent results with minimal downtime.</span>
        </li>
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">Insurance Accepted & Easy Process</span>
          <span className="text-gray-700">Most major insurance plans are accepted, and our Yonkers team will help you verify your coverage, handle paperwork, and maximize your benefits.</span>
        </li>
        <li className="bg-gray-50 p-6 shadow flex flex-col gap-2 font-logo">
          <span className="text-xl font-semibold text-black">Personalized, Compassionate Care</span>
          <span className="text-gray-700">We treat every patient like family and create a custom treatment plan for your unique needs and goals. Your comfort and results are our top priority.</span>
        </li>
      </ul>
    </div>
  </section>
);

const LocationsYonkersNY = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <YonkersHero />
      <OurDoctor />
      <WhyChooseYonkers />
      <Locations />
      <YonkersFAQ />
      <Footer />
    </div>
  );
};

export default LocationsYonkersNY; 