import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-vein-darkGray text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-logo mb-6">Confident Legs</h3>
            <p className="text-gray-300 mb-6">
              Providing expert vein care and treatment for over 25 years. 
              Our mission is to improve quality of life through healthier veins.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-emergency-red hover:bg-emergency-red/90 p-2 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-emergency-red hover:bg-emergency-red/90 p-2 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-emergency-red hover:bg-emergency-red/90 p-2 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-emergency-red hover:bg-emergency-red/90 p-2 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-logo mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#treatments" className="text-gray-300 hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-logo mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emergency-red" />
                <a href="tel:(316)555-0116" className="text-gray-300 hover:text-white transition-colors">(316) 555-0116</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emergency-red shrink-0 mt-1" />
                <span className="text-gray-300">984 N Broadway Suite LL03, Yonkers, NY 10701</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emergency-red" />
                <a href="mailto:info@confidentlegs.com" className="text-gray-300 hover:text-white transition-colors">info@confidentlegs.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-emergency-red" />
                <span className="text-gray-300">Mon-Fri: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
          
          {/* Insurance */}
          <div>
            <h4 className="text-xl font-logo mb-6">Insurance</h4>
            <p className="text-gray-300 mb-4">
              We accept most major insurance plans. Contact our office to verify your coverage.
            </p>
            <button className="bg-emergency-red hover:bg-emergency-red/90 text-white px-6 py-3 transition-colors">
              Verify Insurance
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Confident Legs. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
