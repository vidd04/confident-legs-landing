import React from 'react';

const Locations = () => {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-6 h-6 bg-emergency-red/10 flex items-center justify-center">
            <div className="w-3 h-3 bg-emergency-red"></div>
          </div>
          <h2 className="text-[32px] font-logo text-black">Locations & coverage area</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4">
          {/* Map */}
          <div className="w-full h-[400px] bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.3214047165257!2d-73.89829492342987!3d40.86483847136325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3c1d5c45555%3A0x5b8a03d927a1a0c8!2s984%20N%20Broadway%20Suite%20LL03%2C%20Yonkers%2C%20NY%2010701!5e0!3m2!1sen!2sus!4v1709856144435!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Info */}
          <div className="bg-emergency-red p-8 text-white">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-logo underline mb-2">
                  984 N Broadway Suite LL03,
                  <br />
                  Yonkers, NY 10701
                </h3>
                <button className="bg-white text-emergency-red px-4 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
                  View on map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations; 