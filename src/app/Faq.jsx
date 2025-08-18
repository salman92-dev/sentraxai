'use client'

import { useRef, useState } from 'react'

const faqData = [
  {
    question: 'What is CoinBunch?',
    answer: 'You can return any item within 30 days of purchase, no questions asked.',
  },
  {
    question: 'Which countries do you support?',
    answer: 'Shipping usually takes 3-5 business days depending on your location.',
  },
  {
    question: 'Do I need an account to buy or swap crypto?',
    answer: 'Yes, our support team is available 24/7 through chat and email.',
  },
  {
    question: 'How do you keep my funds secure?',
    answer: 'Yes, our support team is available 24/7 through chat and email.',
  },
  {
    question: 'What are the limits on exchange?',
    answer: 'Yes, our support team is available 24/7 through chat and email',
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)
  const contentRefs = useRef([])

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div
            key={index}
            className="border border-[#31353F] rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center manrope-medium text-base p-4 py-5 text-left bg-[#20232D] text-white"
            >
              <span>{item.question}</span>
              <span className="text-3xl">{isOpen ? '-' : '+'}</span>
            </button>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight: isOpen
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : '0px',
              }}
              className="transition-all duration-200 ease-in-out overflow-hidden bg-gray-900 text-gray-300 px-4"
            >
              <div className="py-4">{item.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
