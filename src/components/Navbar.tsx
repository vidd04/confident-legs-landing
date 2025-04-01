import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed header wrapper */}
      <div className={`w-full fixed top-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-sm' : ''}`}>
        {/* Top bar */}
        <div className="container">
          <div className="flex justify-between items-center h-12 py-2 text-[15px] border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-gray-600">We're here 24/7:</span>
              <a href="tel:(316)555-0116" className="text-emergency-red hover:text-emergency-red/90 font-medium">(316) 555-0116</a>
            </div>
            <div className="text-gray-600">
              984 N Broadway Suite LL03, Yonkers, NY 10701
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="relative">
          <div className="container h-16">
            <div className="h-full flex justify-between items-center relative">
              {/* Grey line top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200" />
              
              {/* Logo and text */}
              <a href="/" className="flex items-center gap-2">
                <img src="/src/assets/232911-84.png" alt="VeinRelief Logo" className="w-6 h-6" />
                <div>
                  <span className="logo-text text-black">VeinRelief</span>
                  <span className="logo-text text-emergency-red"> Solutions</span>
                </div>
              </a>
              
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-10">
                  <a href="#services" className="text-gray-600 hover:text-black text-[15px]">
                    Services
                  </a>
                  <a href="#about" className="text-gray-600 hover:text-black text-[15px]">
                    About Us
                  </a>
                  <a href="#testimonials" className="text-gray-600 hover:text-black text-[15px]">
                    Testimonials
                  </a>
                  <a href="#faq" className="text-gray-600 hover:text-black text-[15px]">
                    FAQ
                  </a>
                </div>
                
                <button className="bg-emergency-red text-white px-6 py-2.5 text-[15px] rounded-full inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors">
                  <Phone size={18} />
                  Contact us
                </button>
              </div>
              
              {/* Grey line bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
            </div>
          </div>
        </nav>
      </div>
      
      {/* Spacer to prevent content from jumping when nav becomes fixed */}
      <div className="h-[112px]"></div>
    </>
  );
};

export default Navbar;
