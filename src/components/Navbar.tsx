
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Search, User, ShoppingBag } from 'lucide-react';
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
      <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        {/* Top announcement bar with scalloped bottom edge */}
        <div className="bg-emergency-red text-white py-2 relative">
          <div className="container">
            <div className="flex justify-between items-center">
              <span className="text-[15px]">We're here 24/7: (316) 555-0116</span>
              <span className="text-[15px] hidden md:block">Summer Special: 20% Off Consultations</span>
            </div>
          </div>
          {/* Scalloped edge */}
          <div className="absolute -bottom-4 left-0 right-0 h-4 overflow-hidden">
            <div className="flex w-full">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="h-4 w-8 bg-emergency-red rounded-b-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main navigation with soft background */}
        <nav className="bg-[#FFF6F0] pt-4">
          <div className="container">
            <div className="flex justify-between items-center pb-4">
              {/* Logo and text */}
              <a href="/" className="flex items-center gap-2">
                <img src="/src/assets/232911-84.png" alt="VeinRelief Logo" className="w-7 h-7" />
                <div>
                  <span className="logo-text text-black text-2xl font-semibold">VeinRelief</span>
                  <span className="logo-text text-emergency-red text-2xl font-semibold"> Solutions</span>
                </div>
              </a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-10">
                  <a href="#vein-info" className="text-gray-700 hover:text-black text-[16px] font-medium">
                    About Vein Conditions
                  </a>
                  <a href="#why-choose-us" className="text-gray-700 hover:text-black text-[16px] font-medium">
                    Why Choose Us
                  </a>
                  <a href="#treatments" className="text-gray-700 hover:text-black text-[16px] font-medium">
                    Treatments
                  </a>
                  <a href="#appointment" className="text-gray-700 hover:text-black text-[16px] font-medium">
                    Appointments
                  </a>
                </div>
                
                <div className="flex items-center gap-5">
                  <button aria-label="Search" className="text-gray-700 hover:text-black">
                    <Search size={22} />
                  </button>
                  <button aria-label="User account" className="text-gray-700 hover:text-black">
                    <User size={22} />
                  </button>
                  <button 
                    className="bg-emergency-red text-white px-6 py-2.5 text-[15px] rounded-full inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors"
                  >
                    <Phone size={18} />
                    Contact us
                  </button>
                </div>
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
            </div>
          </div>
          
          {/* Border */}
          <div className="border-t border-gray-200"></div>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FFF6F0] shadow-md">
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
      <div className="h-[140px]"></div>
    </>
  );
};

export default Navbar;
