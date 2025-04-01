
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to schedule your consultation? Our team is here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-vein-darkGray">Send Us a Message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emergency-red focus:border-emergency-red"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emergency-red focus:border-emergency-red"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emergency-red focus:border-emergency-red"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emergency-red focus:border-emergency-red bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="varicose">Varicose Vein Treatment</option>
                  <option value="spider">Spider Vein Treatment</option>
                  <option value="assessment">Vein Assessment</option>
                  <option value="compression">Compression Therapy</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emergency-red focus:border-emergency-red"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-emergency-red text-white py-3 px-4 rounded-md hover:bg-emergency-red/90 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm h-max">
              <h3 className="text-2xl font-bold mb-6 text-vein-darkGray">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-emergency-red h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-emergency-red h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@veinreliefsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-emergency-red h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Address</h4>
                    <p className="text-gray-600">984 N Broadway Suite LL03<br />Yonkers, NY 10701</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-emergency-red h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold text-gray-900">Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 1pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-vein-darkGray">Insurance</h3>
              <p className="text-gray-600 mb-2">
                We accept most major insurance plans. Please contact our office to verify your insurance coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
