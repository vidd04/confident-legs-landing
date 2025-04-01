import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What causes varicose veins and spider veins?",
    answer: "Varicose and spider veins are often caused by weakened valves in the veins that allow blood to pool instead of flowing efficiently back to the heart. Factors that contribute include genetics, pregnancy, prolonged standing, age, and obesity. While spider veins are mainly a cosmetic concern, varicose veins can lead to symptoms like pain, swelling, and heaviness in the legs."
  },
  {
    question: "Are vein treatments covered by insurance?",
    answer: "Many vein treatments are covered by insurance when medically necessary. Treatments for symptomatic varicose veins (causing pain, swelling, etc.) are often covered, while purely cosmetic treatments for spider veins typically are not. Our team works with you to determine coverage and obtain any needed pre-authorizations."
  },
  {
    question: "How long is recovery after vein treatment?",
    answer: "Recovery time varies depending on the procedure, but most of our treatments are minimally invasive with little to no downtime. Many patients return to normal activities within 24-48 hours, though we usually recommend wearing compression stockings and limiting strenuous exercise for a short period after treatment."
  },
  {
    question: "Are vein treatments painful?",
    answer: "Most modern vein treatments cause minimal discomfort. We use local anesthesia and take great care to ensure your comfort throughout any procedure. Patients typically report feeling minimal pain during treatment and mild soreness afterward that resolves quickly."
  },
  {
    question: "Will treated veins come back?",
    answer: "The veins that are treated will not return, but new veins may develop over time. Following post-treatment guidelines and making lifestyle changes (like regular exercise and wearing compression stockings when recommended) can help prevent new varicose or spider veins from forming."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about vein care and treatment.</p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-vein-darkGray hover:text-emergency-red">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="mb-6 text-gray-600">Still have questions? We're here to help.</p>
          <a href="#contact" 
            className="inline-block bg-emergency-red text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
