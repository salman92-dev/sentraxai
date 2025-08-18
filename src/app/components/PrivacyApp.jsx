"use client";

import { motion } from "framer-motion";
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

const PrivacyApp = () => {
  return (
    <section className="xl:container mx-auto px-6 py-4 pb-4">
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
  );
};

export default PrivacyApp;
