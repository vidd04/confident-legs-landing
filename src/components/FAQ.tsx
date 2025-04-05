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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="border-t-4 border-emergency-red w-32 mb-6"></div>
        <h2 className="text-[36px] md:text-[48px] leading-[1.2] font-logo text-black mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-none border-b-0 last:border-b"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-logo text-black hover:text-emergency-red">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
