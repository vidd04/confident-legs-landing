import React from 'react';

const Locations = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-3 mb-8 w-full sm:w-auto">
          <div className="flex items-center justify-center h-full">
            <div className="w-4 h-4 bg-emergency-red/10 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-emergency-red"></div>
            </div>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-logo text-black">Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
          {/* Map */}
          <div className="w-full h-[400px] bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83474.28363037115!2d-74.01596253749997!3d40.968215400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ed0b0c0dfd29%3A0x865f8695f2ecb181!2sYonkers%20Vein%20Relief!5e1!3m2!1sen!2sus!4v1746824246310!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            ></iframe>
          </div>

          {/* Location Info */}
          <div className="bg-emergency-red p-8 text-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-logo underline mb-2">
                  <a href="https://maps.app.goo.gl/3rRE8KvHyG3a3buQA" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    984 N Broadway Suite LL03,<br />Yonkers, NY 10701
                  </a>
                </h3>
                <a href="https://maps.app.goo.gl/3rRE8KvHyG3a3buQA" target="_blank" rel="noopener noreferrer" className="bg-white text-emergency-red px-4 py-2 text-sm hover:bg-white/90 transition-colors inline-block" style={{ borderRadius: 0 }}>
                  View on map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations; 