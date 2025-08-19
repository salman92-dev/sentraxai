'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TertiaryButton from "./ThirdButton";
import Image from "next/image";
import ShinyText from "./Animations/ShinyText";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const PrivacyProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-100px" });
    return (
        <div className="relative pt-40 mt-40">
            <section className="xl:container mx-auto px-6 py-16 pb-4 top-10 sticky">
      {/* Heading */}
      <ShinyText 
      text="Privacy-First Products"
      className="text-center prompt-medium text-5xl md:text-7xl !leading-[120%] gradient-4 text-transparent bg-clip-text"
      />

      {/* Sub-heading */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="prompt-regular text-white/63 text-center"
      >
        A comprehensive suite of tools designed to protect your digital life across every platform.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="p-[2px] gradient-5 rounded-lg overflow-hidden mt-8"
      >
        <div className="bg-[#333030] rounded-lg py-6 px-8">
          {/* App Info Section */}
          <div className="flex flex-wrap items-center justify-between">
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={2}
              variants={fadeUp}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-3 md:w-[65%]"
            >
              <ShinyText 
              text="Offline Messaging App"
              className="prompt-medium text-3xl md:text-5xl text-transparent bg-clip-text gradient-4"
              />
              <TertiaryButton text="Live on Android & iOS" url="#" />
              <p className="prompt-regular text-white/63">
                Transform how you communicate with our flagship messaging application that works even without internet connection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src="/messaging.png" width={352} height={352} alt="message" />
            </motion.div>
          </div>

          {/* Features */}
          <motion.h4
            initial="hidden"
            whileInView="visible"
            custom={3}
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-8"
          >
            Key Features
          </motion.h4>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12 mt-8"
          >
            {[
              { img: "/img-1.png", title: "Offline Messaging", desc: "Send and receive messages without internet connectivity" },
              { img: "/img-2.png", title: "Mesh Networking", desc: "Peer-to-peer routing via Bluetooth and WiFi Direct" },
              { img: "/img-3.png", title: "End-to-End Encryption", desc: "Military-grade security for every conversation" },
              { img: "/img-4.png", title: "Zero Metadata", desc: "We collect and store absolutely no personal data" },
              { img: "/img-5.png", title: "Cross-Platform", desc: "Available on Android and iOS with feature parity" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="flex flex-col gap-3"
              >
                <Image src={feature.img} alt={feature.title} width={39} height={39} />
                <h5 className="prompt-regular text-white text-lg">{feature.title}</h5>
                <p className="prompt-regular text-sm text-white/63">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Specs */}
          <motion.h4
            initial="hidden"
            whileInView="visible"
            custom={4}
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-8"
          >
            Technical Specs
          </motion.h4>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-8 items-center justify-between text-white/63 prompt-regular mt-4"
          >
            {[
              "● Android 8.0+ compatibility",
              "● iOS 15+ support",
              "● Bluetooth LE mesh implementation",
              "● SQLite encrypted database",
              "● Sub-2 second message delivery",
            ].map((spec, i) => (
              <motion.li key={i} variants={fadeUp} custom={i}>
                {spec}
              </motion.li>
            ))}
          </motion.ul>

          {/* Download Links */}
          <motion.h4
            initial="hidden"
            whileInView="visible"
            custom={5}
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-8"
          >
            Download Links
          </motion.h4>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-1"
          >
            <a href="" className="bg-clip-text text-transparent gradient-6">[Android]</a>
            <a href="" className="bg-clip-text text-transparent gradient-6">[iOS]</a>
          </motion.div>
        </div>
      </motion.div>
            </section>


            <section className="xl:container mx-auto px-6 sticky top-10">
            <div className="p-[2px] gradient-5 rounded-lg overflow-hidden mt-8">
                <div className="bg-[#333030] rounded-lg py-6 px-8">
                {/* Top Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="flex flex-wrap items-center justify-between"
                >
                    <div className="flex flex-col gap-3">
                    <ShinyText 
                    text="Privacy Dashboard"
                    className="prompt-medium text-3xl md:text-5xl text-transparent bg-clip-text gradient-4"
                    />
                    <TertiaryButton text="Phase 2 Development" url="#" />
                    <p className="prompt-regular text-white/63">
                        Your command center for Web3 privacy, accessible through an
                        intuitive web interface.
                    </p>
                    </div>
                    <Image
                    src="/privacy.png"
                    width={352}
                    height={352}
                    alt="message"
                    />
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12 mt-8">
                    {[
                    {
                        icon: "/img-6.png",
                        title: "Private Swap Module",
                        features: [
                        [
                            "Zero-Knowledge Trading:",
                            "Complete transaction privacy without sacrificing security",
                        ],
                        [
                            "Multi-Chain Support:",
                            "Swap tokens across Ethereum, Polygon, BSC, and more",
                        ],
                        [
                            "Liquidity Aggregation:",
                            "Best prices from multiple DEX sources",
                        ],
                        [
                            "MEV Protection:",
                            "Advanced protection against front-running",
                        ],
                        ],
                    },
                    {
                        icon: "/img-7.png",
                        title: "Privacy Media Layer",
                        features: [
                        [
                            "Metadata Scrubbing:",
                            "Automatic removal of EXIF data, location, and device identifiers",
                        ],
                        [
                            "Visual Content Analysis:",
                            "AI-powered face and landmark detection and obscuring",
                        ],
                        [
                            "Social Media Integration:",
                            "Direct posting with privacy protection",
                        ],
                        [
                            "Batch Processing:",
                            "Handle thousands of files efficiently",
                        ],
                        ],
                    },
                    {
                        icon: "/img-8.png",
                        title: "Privacy Document Layer",
                        features: [
                        [
                            "PII Detection:",
                            "Advanced personally identifiable information detection",
                        ],
                        [
                            "Smart Redaction:",
                            "Context-aware redaction preserving document structure",
                        ],
                        [
                            "Format Preservation:",
                            "Maintain original formatting after processing",
                        ],
                        [
                            "Secure Sharing:",
                            "Built-in privacy guarantees for collaboration",
                        ],
                        ],
                    },
                    ].map((block, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        custom={i + 1}
                        className="flex flex-col gap-3"
                    >
                        <Image src={block.icon} alt={block.title} width={39} height={39} />
                        <h5 className="prompt-regular text-white text-lg">{block.title}</h5>
                        <ul className="text-white/63 space-y-3">
                        {block.features.map(([highlight, text], idx) => (
                            <li key={idx}>
                            ● <span className="text-white underline">{highlight}</span>{" "}
                            {text}
                            </li>
                        ))}
                        </ul>
                    </motion.div>
                    ))}
                </div>
                </div>
            </div>
            </section>



    <section className="xl:container mx-auto px-6 py-4 pb-4 sticky top-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-[2px] gradient-5 rounded-lg overflow-hidden mt-8"
      >
        <div className="bg-[#333030] rounded-lg py-6 px-8">
          {/* Header Section */}
          <motion.div
            className="flex flex-wrap items-center justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.div
              className="flex flex-col gap-3"
              variants={fadeUp}
              custom={0}
            >
              <ShinyText 
              text="Privacy Camera App"
              className="prompt-medium text-3xl md:text-5xl text-transparent bg-clip-text gradient-4"
              />
              <TertiaryButton text="Phase 3 Development" url="#" />
              <p className="prompt-regular text-white/63">
                Revolutionary camera application with privacy built into every
                capture.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <Image
                src="/privacyapp.png"
                width={352}
                height={352}
                alt="message"
                className="hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.h4
            className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 gap-y-12 mt-8">
            {[
              {
                img: "/img-1.png",
                title: "Real-Time Privacy Filtering",
                desc: "Live analysis and risk alerts as you compose shots",
              },
              {
                img: "/img-2.png",
                title: "Automatic Metadata Removal",
                desc: "Every photo and video stripped of identifying data",
              },
              {
                img: "/img-3.png",
                title: "AI-Powered Protection",
                desc: "Contextual analysis of privacy implications",
              },
              {
                img: "/img-4.png",
                title: "Instant Social Sharing",
                desc: "Direct social media posting with complete protection",
              },
              {
                img: "/img-5.png",
                title: "Secure Cloud Backup",
                desc: "Zero-knowledge encrypted backup",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-3 rounded-xl hover:bg-white/10 transition-colors"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image src={item.img} alt={item.title} width={39} height={39} />
                <h5 className="prompt-regular text-white text-lg">
                  {item.title}
                </h5>
                <p className="prompt-regular text-sm text-white/63">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon */}
          <motion.h4
            className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Coming Soon
          </motion.h4>

          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a href="#" className="bg-clip-text text-transparent gradient-6">
              Beta available Q4 2025
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>




    <section 
          ref={ref} 
          className="xl:container mx-auto px-6 py-4 pb-4"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="p-[2px] gradient-5 rounded-lg overflow-hidden mt-8"
            >
                <div className="bg-[#333030] rounded-lg py-4 px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-between"
                    >
                        <div className="flex flex-col gap-3">
                            <ShinyText 
                            text="Web3 Social Media Platform"
                            className="prompt-medium text-3xl md:text-5xl text-transparent bg-clip-text gradient-4"
                            />
                            <TertiaryButton text="Confidential Development" url="#" />
                            <p className="prompt-regular text-white/63">
                                A groundbreaking platform that will redefine social media privacy in the Web3 era..
                            </p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <Image src="/privacyapp.png" width={352} height={352} alt="message" />
                        </motion.div>
                    </motion.div>

                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl"
                    >
                        What We Can Share
                    </motion.h4>

                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12 mt-8"
                    >
                        {[
                            "Revolutionary privacy-first social experience",
                            "Paradigm-shifting user interaction model",
                            "Complete integration with Sentrax ecosystem",
                            "Industry-disrupting approach to social media"
                        ].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                variants={{ visible: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="flex flex-col gap-3"
                            >
                                <Image src={`/img-${i + 1}.png`} alt={`img-${i + 1}`} width={39} height={39} />
                                <h5 className="prompt-regular text-white text-lg">{text}</h5>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="gradient-4 bg-transparent bg-clip-text prompt-medium text-2xl mt-8"
                    >
                        Launch
                    </motion.h4>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.7, delay: 1 }}
                        className="flex items-center gap-1"
                    >
                        <a href="" className="bg-clip-text text-transparent gradient-6">
                            2027
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
        </div>
    )
}


export default PrivacyProducts;