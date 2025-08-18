"use client"
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gFaq = [
  {
    question: 'What makes Sentrax different from other privacy tools?',
    answer: 'You can return any item within 30 days of purchase, no questions asked.',
  },
  {
    question: 'Is Sentrax really free to use?',
    answer: 'Shipping usually takes 3-5 business days depending on your location.',
  },
  {
    question: 'How does the fair launch work?',
    answer: 'Yes, our support team is available 24/7 through chat and email.',
  },
];

const tFaq  = [
  {
    question: 'How do you keep my funds secure?',
    answer: 'Yes, our support team is available 24/7 through chat and email.',
  },
  {
    question: 'What are the limits on exchange?',
    answer: 'Yes, our support team is available 24/7 through chat and email',
  },
  {
    question: 'What makes Sentrax different from other privacy tools?',
    answer: 'You can return any item within 30 days of purchase, no questions asked.',
  },
];

const tokenFaq  = [
  {
    question: 'How do you keep my funds secure?',
    answer: 'Yes, our support team is available 24/7 through chat and email.',
  },
  {
    question: 'What are the limits on exchange?',
    answer: 'Yes, our support team is available 24/7 through chat and email',
  },
  {
    question: 'What makes Sentrax different from other privacy tools?',
    answer: 'You can return any item within 30 days of purchase, no questions asked.',
  },
];

const Faqs = () => {
  const [data, setData] = useState(gFaq);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="gradient-9">
      <div className="xl:container mx-auto px-6 py-16">
        <div className="flex flex-wrap gap-12 items-center">
          {/* Left Side Tabs */}
          <motion.div 
            className="md:w-[48%]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="gradient-10 text-transparent bg-clip-text md:text-5xl prompt-medium">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-2">
              <h4 className={`flex items-center gap-2 text-3xl cursor-pointer ${data === gFaq ? 'text-black prompt-semi' : 'text-black/70 prompt-regular'}`} onClick={()=>{setData(gFaq)}}>
                ➤ General Questions
              </h4>
              <h4 className={`flex items-center gap-2 text-3xl cursor-pointer ${data === tFaq ? 'text-black prompt-semi' : 'text-black/70 prompt-regular'}`} onClick={()=>{setData(tFaq)}}>
                ➤ Technical Questions
              </h4>
              <h4 className={`flex items-center gap-2 text-3xl cursor-pointer ${data === tokenFaq ? 'text-black prompt-semi' : 'text-black/70 prompt-regular'}`} onClick={()=>{setData(tokenFaq)}}>
                ➤ Token Questions
              </h4>
            </div>
          </motion.div>

          {/* Right Side FAQs */}
          <motion.div 
            className="md:w-[48%]"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {data.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    className="border-b border-[#2F2C2C33]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex gap-4 items-center manrope-medium text-base py-5 text-left gradient-10 text-transparent bg-clip-text"
                    >
                      <span className="text-3xl">{isOpen ? '-' : '+'}</span>
                      <span>{item.question}</span>
                    </button>

                    {/* AnimatePresence for expanding answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden text-black/70 px-4"
                        >
                          <div className="py-4">{item.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
