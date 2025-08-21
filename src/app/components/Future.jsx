'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ShinyText from './Animations/ShinyText'
// Your data
const future = [
  {
    img: '/f-1.png',
    heading: 'Offline Messaging',
    descrip:
      'Send messages without internet using innovative mesh networking. End-to-end encrypted with zero metadata collection.',
  },
  {
    img: '/f-2.png',
    heading: 'All-in-One Privacy Hub',
    descrip:
      'Comprehensive Web3 privacy toolkit including private swaps, media scrubbing, and document protection.',
  },
  {
    img: '/f-3.png',
    heading: 'Privacy-Enhanced Camera',
    descrip:
      'Real-time privacy filtering with automatic metadata removal & instant social sharing protection.',
  },
  {
    img: '/f-4.png',
    heading: 'Revolutionary Social Platform',
    descrip:
      'Coming soon - A groundbreaking Web3 social experience that redefines privacy in social media.',
  },
]

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Future = () => {
  return (
    <div className="xl:container mx-auto px-6 py-16" id='features'>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <ShinyText 
        text="The Complete Privacy Ecosystem"
        className="text-center prompt-medium text-5xl md:text-7xl !leading-[120%] gradient-4 text-transparent bg-clip-text"
        />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid gap-8 md:grid-cols-3 lg:grid-cols-4 mt-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {future.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            className="rounded-3xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 bg-[#303030] sticky top-24"
          >
            <Image src={item.img} alt={item.img} width={400} height={400}/>
            <h3 className="text-4xl prompt-semi mb-3">{item.heading}</h3>
            <p className="text-white/63 prompt-regular text-sm">
              {item.descrip}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-16 md:mt-16"
      >
        <motion.h4
          variants={card}
          className="gradient-4 bg-transparent bg-clip-text text-4xl prompt-medium my-4"
        >
          Trust Indicators
        </motion.h4>

        <div className="flex items-center justify-between flex-wrap gap-y-4">
          {[
            'Zero Data Collection',
            'Military-Grade Encryption',
            'SOC 2 Compliant',
            'Open Source Commitment',
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={card}
              className="flex items-center gap-2 text-white/63 prompt-regular"
            >
              <span>
                <svg
                  width="46"
                  height="24"
                  viewBox="0 0 46 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 18.6916V5.08411C10.3178 5.75701 24.3738 7.85047 24.0748 6.28037L24 0L45.8318 11.9626L24.0748 24V17.6449C24.6729 15.8505 12.3364 17.5701 0 18.6916Z"
                    fill="url(#paint0_linear_51_341)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_51_341"
                      x1="22.9159"
                      y1="0"
                      x2="22.9159"
                      y2="55.68"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#7E61FF" />
                      <stop offset="1" stopColor="#FFBD7E" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Future
