
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
            <div className="text-gray-600 hidden md:block">
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
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-10">
                  <a href="#vein-info" className="text-gray-600 hover:text-black text-[15px]">
                    About Vein Conditions
                  </a>
                  <a href="#why-choose-us" className="text-gray-600 hover:text-black text-[15px]">
                    Why Choose Us
                  </a>
                  <a href="#treatments" className="text-gray-600 hover:text-black text-[15px]">
                    Treatments
                  </a>
                  <a href="#appointment" className="text-gray-600 hover:text-black text-[15px]">
                    Appointments
                  </a>
                </div>
                
                <button className="bg-emergency-red text-white px-6 py-2.5 text-[15px] rounded-full inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors">
                  <Phone size={18} />
                  Contact us
                </button>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden flex items-center" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
              
              {/* Grey line bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200" />
            </div>
          </div>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="container py-4">
              <div className="flex flex-col gap-4">
                <a 
                  href="#vein-info" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Vein Conditions
                </a>
                <a 
                  href="#why-choose-us" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Choose Us
                </a>
                <a 
                  href="#treatments" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Treatments
                </a>
                <a 
                  href="#appointment" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Appointments
                </a>
                <div className="py-2">
                  <button className="w-full bg-emergency-red text-white px-4 py-3 rounded-md inline-flex items-center justify-center gap-2 hover:bg-emergency-red/90 transition-colors">
                    <Phone size={18} />
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Spacer to prevent content from jumping when nav becomes fixed */}
      <div className="h-[112px]"></div>
    </>
  );
};

export default Navbar;
