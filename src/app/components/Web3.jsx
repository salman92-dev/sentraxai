"use client";
import TertiaryButton from "./ThirdButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Web3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
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
                <div className="bg-[#333030] rounded-lg py-6 px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-between"
                    >
                        <div className="flex flex-col gap-3">
                            <h3 className="prompt-medium text-3xl md:text-5xl">Web3 Social Media Platform</h3>
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
    );
};

export default Web3;
