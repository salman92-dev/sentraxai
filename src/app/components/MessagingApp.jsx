"use client";
import { motion } from "framer-motion";
import TertiaryButton from "./ThirdButton";
import Image from "next/image";
import ShinyText from "./Animations/ShinyText";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const MessagingApp = () => {
  return (
    <section className="xl:container mx-auto px-6 py-16 pb-4 sticky" id="products">
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
                <Image src={feature.img} alt={feature.title} width={156} height={156} className="w-10" />
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
  );
};

export default MessagingApp;
