import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-100/80 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-5 px-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors rounded-xl"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-semibold text-gray-900 text-left flex-1">
        {item.question}
      </h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="flex-shrink-0 p-2 bg-gray-100 rounded-lg"
      >
        <BiChevronDown className="w-5 h-5 text-gray-700" />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
            {item.answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const faqItems: FAQItem[] = [
    {
      question: 'What is gogetwell.ai?',
      answer: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
    },
    {
      question: 'What is the AI Front Office for Healthcare Agents?',
      answer: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
    },
    {
      question: 'How does the AI Agent assist me in my healthcare business?',
      answer: 'The AI Agent works like a virtual assistant, answering patient questionstions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
    },
    {
      question: 'Can I customize the website for my healthcare services?',
      answer: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
    },
    {
      question: 'How does this platform support independent healthcare facilitators like me?',
      answer: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
    },
    {
      question: 'How does the platform help me manage patient leads?',
      answer: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
    },
    {
      question: 'Is it easy to integrate the platform with the hospitals I work with?',
      answer: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.',
    },
    {
      question: 'Is the platform secure and compliant with healthcare regulations?',
      answer: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
    },
    {
      question: 'How quickly can I get started with the platform?',
      answer: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
    },
    {
      question: 'What kind of customer support is available if I need help?',
      answer: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
    },
    {
      question: 'How does the platform help me attract more patients?',
      answer: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-indigo-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 w-24 h-1.5 rounded-full" />
        </div>

        <motion.div 
          className="bg-white rounded-2xl shadow-lg divide-y divide-gray-100/80"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItems.has(index)}
              onClick={() => toggleItem(index)}
            />
          ))}
        </motion.div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-lg">
            Still have questions?{' '}
            <a 
              href="#contact"
              className="text-indigo-600 hover:text-indigo-700 font-medium underline transition-colors"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;