import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/ChatGPT Image Apr 3, 2025, 05_17_35 PM.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const locationsTimeout = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

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
      <div className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-sm' : ''}`}
        style={{ position: 'fixed' }}>
        {/* Top bar */}
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-10 py-1.5 text-[14px] border-b border-gray-100 w-full">
            <a
              href="https://maps.app.goo.gl/3rRE8KvHyG3a3buQA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 font-logo whitespace-nowrap overflow-hidden text-ellipsis hover:underline"
            >
              984 N Broadway Suite LL03
            </a>
            <a href="tel:9143446743" className="text-emergency-red font-logo hover:underline transition-all whitespace-nowrap ml-4" style={{ borderRadius: 0 }}>
              914-344-6743
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="relative">
          <div className="container px-6 md:px-8 lg:px-12 h-12 sm:h-16">
            <div className="h-full flex flex-nowrap justify-between items-center relative gap-2 md:gap-4 py-1 sm:py-0">
              {/* Grey line top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200" />
              {/* Logo and text */}
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 min-w-0">
                <img src={logo} alt="VeinRelief Logo" className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8" />
                <div className="flex items-center min-w-0">
                  <span className="font-logo text-[16px] sm:text-[20px] md:text-[18px] tracking-tighter text-black whitespace-nowrap">VeinRelief</span>
                  <span className="font-logo text-[16px] sm:text-[20px] md:text-[18px] tracking-tighter text-emergency-red whitespace-nowrap"> Solutions</span>
                </div>
              </Link>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-4 lg:gap-10 flex-nowrap min-w-0">
                <div className="flex items-center gap-4 lg:gap-10 flex-nowrap min-w-0">
                  <Link to="/conditions" className="font-logo text-[15px] text-gray-600 hover:text-black whitespace-nowrap">
                    About Vein Conditions
                  </Link>
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (locationsTimeout.current) clearTimeout(locationsTimeout.current);
                      setLocationsOpen(true);
                    }}
                    onMouseLeave={() => {
                      locationsTimeout.current = setTimeout(() => setLocationsOpen(false), 200);
                    }}
                    tabIndex={0}
                  >
                    <button
                      className="font-logo text-[15px] text-gray-600 hover:text-black flex items-center gap-1 focus:outline-none whitespace-nowrap"
                      onClick={() => setLocationsOpen((open) => !open)}
                      type="button"
                    >
                      Locations <ChevronDown size={16} />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50 rounded-md transition-all duration-150 ${locationsOpen ? 'block' : 'hidden'}`}
                      onMouseEnter={() => {
                        if (locationsTimeout.current) clearTimeout(locationsTimeout.current);
                        setLocationsOpen(true);
                      }}
                      onMouseLeave={() => {
                        locationsTimeout.current = setTimeout(() => setLocationsOpen(false), 200);
                      }}
                    >
                      <Link
                        to="/locations/yonkers-ny"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-logo"
                        onClick={() => setLocationsOpen(false)}
                      >
                        Yonkers, NY
                      </Link>
                    </div>
                  </div>
                  <Link to="/treatments" className="font-logo text-[15px] text-gray-600 hover:text-black whitespace-nowrap">
                    Treatments
                  </Link>
                </div>
                <a 
                  href="tel:9143446743"
                  className="bg-emergency-red text-white px-4 py-2 text-[15px] inline-flex items-center gap-2 hover:bg-emergency-red/90 transition-colors font-logo whitespace-nowrap md:hidden lg:flex" style={{ borderRadius: 0 }}
                >
                  <Phone size={18} />
                  Call us
                </a>
              </div>
              {/* Mobile menu button */}
              <button 
                className="lg:hidden flex items-center" 
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
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
            <div className="container py-4">
              <div className="flex flex-col gap-4">
                <Link 
                  to="/conditions" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Vein Conditions
                </Link>
                <div>
                  <button
                    className="w-full text-left text-gray-700 py-2 border-b border-gray-100 flex items-center gap-1 font-logo"
                    onClick={() => setLocationsOpen((open) => !open)}
                    type="button"
                  >
                    Locations <ChevronDown size={16} />
                  </button>
                  {locationsOpen && (
                    <div className="pl-4">
                      <Link
                        to="/locations/yonkers-ny"
                        className="block py-2 text-gray-700 hover:bg-gray-100 font-logo"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setLocationsOpen(false);
                        }}
                      >
                        Yonkers, NY
                      </Link>
                    </div>
                  )}
                </div>
                <Link 
                  to="/treatments" 
                  className="text-gray-700 py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Treatments
                </Link>
                <div className="py-2">
                  <a 
                    href="tel:9143446743"
                    className="w-full bg-emergency-red text-white px-4 py-3 rounded-md inline-flex items-center justify-center gap-2 hover:bg-emergency-red/90 transition-colors"
                  >
                    <Phone size={18} />
                    Call us
                  </a>
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
