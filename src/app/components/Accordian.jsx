'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqData = [
  {
    question: 'AI-Guided Hosting Optimization',
    answer:
      'Monitor content delivery, uptime, and latency—automatically improved through real-time AI feedback.',
  },
  {
    question: 'Privacy Swap Automation',
    answer:
      'Monitor content delivery, uptime, and latency—automatically improved through real-time AI feedback.',
  },
  {
    question: 'Privacy Configuration Assistant',
    answer:
      'Monitor content delivery, uptime, and latency—automatically improved through real-time AI feedback.',
  },
]

// Parent container variants (for stagger effect)
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Each FAQ item variant
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      className="divide-y divide-white/30"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
    >
      {faqData.map((itemData, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div
            key={index}
            variants={item}
            className="border-b border-white/30"
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-lg px-4 py-6 text-left text-white"
            >
              <span>{itemData.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-bold"
              >
                +
              </motion.span>
            </button>

            {/* Animated Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.75, ease: 'easeInOut' }}
                  className="overflow-hidden text-white/70 px-4"
                >
                  <div className="py-4">{itemData.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
