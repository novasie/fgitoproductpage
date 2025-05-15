'use client';
import React, { useState } from 'react';

const Faq = () => {
  // FAQ data
  const faqData = [
    {
      question: "What is the FGITO app, and how does it work?",
      answer: "FGITO brings the warmth of home-cooked meals right to your doorstep. With just a few simple steps, you can enjoy food made with love by home chefs in your neighborhood. Download the FGITO app, log in, browse through the heartfelt menus of local chefs, and order the dish that reminds you of home. Let us deliver the taste of ghar ka khana, made with care, straight to you."
    },
    {
      question: "Do FGITO Homechefs have the same menu every day, or is it different?",
      answer: "Our home chefs craft a fresh, unique menu every day, bringing new flavors and dishes to your table."
    },
    {
      question: "Can I customize my meal or ask for specific ingredients?",
      answer: "Customers can personalize their meals with basic customizations, such as choosing the number of chapatis or the quantity of rice. For specific requests or special preferences, a separate order can be placed to ensure your meal is just right."
    },
    {
      question: "Is there a minimum amount I need to order for delivery?",
      answer: "There's no minimum order amount on FGITO—order as much or as little as you like!"
    },
    {
      question: "Can I choose a specific time for my delivery?",
      answer: "Yes, you can schedule a specific delivery time for your order. For now, simply contact us via WhatsApp to arrange your preferred delivery time."
    },
    {
      question: "What time does delivery start?",
      answer: "Deliveries are scheduled based on the kitchen's opening and closing hours."
    },
    {
      question: "Who can I contact if I have an issue with my order or the app?",
      answer: "You can easily connect with our team through the app's Help section via WhatsApp."
    },
    {
      question: "Can I place party orders on FGITO? If yes, how do I do it?",
      answer: "Yes, you can place party orders on FGITO! For now, simply reach out to us via WhatsApp through the Help section in your Profile. We're here to make your celebrations special!"
    }
  ];

  // State to track which accordion item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about FGITO's home-cooked food delivery service.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-gray-800 text-lg">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-red-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact us through the app's Help section via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
