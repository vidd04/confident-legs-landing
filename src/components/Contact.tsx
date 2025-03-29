
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to schedule a consultation or have questions? We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-vein-darkGray">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-vein-lightBlue p-3 rounded-full mr-4">
                  <Phone className="text-vein-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-vein-darkGray">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vein-lightBlue p-3 rounded-full mr-4">
                  <Mail className="text-vein-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-vein-darkGray">Email</h4>
                  <p className="text-gray-600">info@veincarecenter.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vein-lightBlue p-3 rounded-full mr-4">
                  <MapPin className="text-vein-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-vein-darkGray">Location</h4>
                  <p className="text-gray-600">123 Healthy Veins Way<br />Medical District, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-vein-lightBlue p-3 rounded-full mr-4">
                  <Clock className="text-vein-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-vein-darkGray">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8am - 5pm<br />
                    Saturday: 9am - 1pm<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-vein-darkGray mb-4">Insurance</h4>
              <p className="text-gray-600 mb-4">
                We accept most major insurance plans. Contact our office to verify your coverage.
              </p>
              <Button variant="outline" className="border-vein-blue text-vein-blue hover:bg-vein-lightBlue">
                Verify Insurance
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-vein-darkGray">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-vein-darkGray">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-vein-darkGray">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-vein-darkGray">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-medium text-vein-darkGray">
                  Service of Interest
                </label>
                <select 
                  id="service" 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Initial Consultation</option>
                  <option value="sclerotherapy">Sclerotherapy</option>
                  <option value="laser">Endovenous Laser Treatment</option>
                  <option value="assessment">Vein Mapping & Assessment</option>
                  <option value="compression">Compression Therapy</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-vein-darkGray">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-vein-blue hover:bg-vein-purple transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
