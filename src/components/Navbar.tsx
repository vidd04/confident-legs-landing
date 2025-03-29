
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-vein-blue font-display">VeinCare</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <a href="#services" className="text-vein-darkGray hover:text-vein-purple transition-colors">Services</a>
              <a href="#about" className="text-vein-darkGray hover:text-vein-purple transition-colors">About Us</a>
              <a href="#testimonials" className="text-vein-darkGray hover:text-vein-purple transition-colors">Testimonials</a>
              <a href="#faq" className="text-vein-darkGray hover:text-vein-purple transition-colors">FAQ</a>
            </div>
            
            <Button className="bg-vein-blue hover:bg-vein-purple transition-colors">
              <Phone size={16} className="mr-2" />
              Book Consultation
            </Button>
          </div>
          
          <button 
            className="md:hidden text-vein-darkGray"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <a href="#services" className="text-vein-darkGray hover:text-vein-purple transition-colors py-2 border-b border-gray-100">Services</a>
            <a href="#about" className="text-vein-darkGray hover:text-vein-purple transition-colors py-2 border-b border-gray-100">About Us</a>
            <a href="#testimonials" className="text-vein-darkGray hover:text-vein-purple transition-colors py-2 border-b border-gray-100">Testimonials</a>
            <a href="#faq" className="text-vein-darkGray hover:text-vein-purple transition-colors py-2 border-b border-gray-100">FAQ</a>
            <Button className="bg-vein-blue hover:bg-vein-purple transition-colors mt-2">
              <Phone size={16} className="mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
