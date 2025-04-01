import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient, 52",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "After years of hiding my legs, I can finally wear shorts again. The team took the time to explain everything and made the entire process comfortable.",
    rating: 5
  },
  {
    name: "Michael Peterson",
    role: "Patient, 64",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "The pain and heaviness in my legs was affecting my daily life. After treatment, I'm back to walking without discomfort. Life-changing!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Patient, 37",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "As someone who was nervous about any procedure, I was impressed by how painless and quick the treatment was. The results are amazing!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="section-title">Patient Success Stories</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from real patients who have experienced relief and renewed confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute text-vein-lightBlue -top-4 -left-4" size={72} />
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-vein-darkGray">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-600 relative z-10">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-emergency-red text-white p-8 md:p-12 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Take the First Step?</h3>
            <p className="text-lg mb-8">Schedule your consultation today and start your journey to healthier legs.</p>
            <button className="bg-white text-emergency-red hover:bg-emergency-red/5 transition-colors px-8 py-4 rounded-lg font-bold">
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
