"use client";
import TertiaryButton from "./ThirdButton";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Privacy = () => {
  return (
    <section className="xl:container mx-auto px-6">
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
              <h3 className="prompt-medium text-3xl md:text-5xl">
                Privacy Dashboard
              </h3>
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
  );
};

export default Privacy;
