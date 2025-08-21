"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ShinyText from "./Animations/ShinyText";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Roadmap = () => {
  return (
    <section className="gradient-11" id="roadmap">
      <div className="xl:container mx-auto px-6 py-16">
        <ShinyText 
         text="Sentrax Technical Roadmap"
         className="text-center prompt-medium text-5xl md:text-7xl !leading-[120%] text-transparent bg-clip-text gradient-4 md:px-40"
        />
        <motion.p
          className="text-white/63 prompt-regular text-2xl text-center"
          initial="hidden"
          whileInView="show"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          Built from first principles. Powered by<br />AI. Architected for privacy.
        </motion.p>

        <div className="flex flex-col gap-6 mt-12">
          <div className="flex flex-wrap gap-6 md:gap-[13rem]">
            {[
              {
                phase: "Phase 01",
                title: "Foundation (Q3-Q4 2025)",
                items: [
                  "Establish Our Base: Launch the Sentrax token via a fair launch model and release the MVP of our offline messaging application.",
                  "Build the Core: Deploy our basic API infrastructure and establish our core team and advisory board.",
                ],
              },
              {
                phase: "Phase 02",
                title: "Q1-Q2 2026: Expansion Phase",
                items: [
                  "Comprehensive privacy dashboard completion",
                  "First wave of enterprise customer onboarding",
                  "API infrastructure scaling",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="w-full md:w-[30%] gradient-7 rounded-t-lg max-md:sticky top-24"
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="gradient-6 p-2 text-center rounded-lg">{item.phase}</p>
                <div className="p-8">
                  <h4 className="prompt-semi text-3xl mb-6 text-transparent bg-clip-text gradient-4">{item.title}</h4>
                  <ul className="space-y-2 list-disc">
                    {item.items.map((li, i) => (
                      <li key={i} className="text-white/63">
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeInUp}
            viewport={{ once: true }}
          >
            <Image
              src="/arrow.png"
              alt="arrow"
              width={1526}
              height={65}
              className="hidden md:block"
            />
          </motion.div>

          <div className="flex flex-wrap justify-end gap-6 md:gap-[13rem]">
            {[
              {
                phase: "Phase 03",
                title: "Q3-Q4 2026: Innovation Phase",
                items: [
                  "Privacy camera application optimization",
                  "Expanded API functionality and SDK",
                  "Enterprise partnership scaling",
                ],
              },
              {
                phase: "Phase 04",
                title: "Revolution Phase",
                items: [
                  "Revolutionary Web3 social media platform launch",
                  "Industry-wide privacy standard adoption",
                  "Global presence expansion",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="md:w-[30%] gradient-7 rounded-t-lg sticky top-24"
                initial="hidden"
                whileInView="show"
                variants={fadeInUp}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="gradient-6 p-2 text-center rounded-lg">{item.phase}</p>
                <div className="p-8">
                  <h4 className="prompt-semi text-3xl mb-6 text-transparent bg-clip-text gradient-4">{item.title}</h4>
                  <ul className="space-y-2 list-disc">
                    {item.items.map((li, i) => (
                      <li key={i} className="text-white/63">
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
