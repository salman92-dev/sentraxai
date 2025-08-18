"use client";
import { motion } from "framer-motion";
import PrimaryButton from "./Button";

const Join = () => {
    return (
        <section className="xl:container mx-auto px-6 py-16 md:py-32">
            <div className="flex flex-col items-center gap-4">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center prompt-medium text-5xl md:text-7xl !leading-[120%] gradient-4 bg-transparent bg-clip-text"
                >
                    Join the Privacy Revolution
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="prompt-regular text-white/63 text-center max-w-2xl"
                >
                    Be part of the fair launch with 1 billion $sentrax tokens and transparent revenue sharing.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <PrimaryButton text="Get Early Access" url="#" className="mt-8" />
                </motion.div>
            </div>
        </section>
    );
};

export default Join;
