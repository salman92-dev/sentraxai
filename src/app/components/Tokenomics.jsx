"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShinyText from "./Animations/ShinyText";

const Tokenomics = () => {
    return (
        <section className="xl:container mx-auto px-6 py-16 overflow-hidden">
            {/* Heading */}
            
            <ShinyText 
            text="$Sentrax Tokenomics"
            className="text-center prompt-medium text-5xl md:text-7xl !leading-[120%] text-transparent bg-clip-text gradient-4"
            />

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="text-white/63 prompt-regular text-2xl text-center"
            >
                Fair launch with transparent revenue sharing and<br />
                sustainable ecosystem growth
            </motion.p>

            {/* Top Tokenomics Info */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-12 mt-6 text-white"
            >
                <p className="prompt-regular text-2xl text-center">Total supply:  <span className="text-white/63">1,000,000 $sentrax</span></p>
                <p className="prompt-regular text-2xl text-center">Launch Method: <span className="text-white/63">Fair Launch</span></p>
                <p className="prompt-regular text-2xl text-center">Transaction Tax: <span className="text-white/63">5%</span></p>
            </motion.div>

            {/* Liquidity & Development */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-between gradient-7 p-4 rounded-xl gap-12 mt-6"
            >
                <p className="prompt-medium text-2xl flex gap-2 items-center">
                    <span>
                        <svg width="14" height="50" viewBox="0 0 14 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="50" rx="4" fill="url(#paint0_linear_51_463)" />
                            <defs>
                                <linearGradient id="paint0_linear_51_463" x1="7" y1="0" x2="6.99987" y2="116" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E61FF" />
                                    <stop offset="1" stopColor="#FFBD7E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    Liquidity Pool: 85% (850,000,000 $sentrax)
                </p>
                <p className="prompt-medium text-2xl flex gap-2 items-center">
                    <span>
                        <svg width="14" height="50" viewBox="0 0 14 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="50" rx="4" fill="url(#paint0_linear_51_463)" />
                            <defs>
                                <linearGradient id="paint0_linear_51_463" x1="7" y1="0" x2="6.99987" y2="116" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7E61FF" />
                                    <stop offset="1" stopColor="#FFBD7E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    Development Fund: 15% (150,000,000 $sentrax)
                </p>
            </motion.div>

            {/* Token Distribution Section */}
            <div className="flex flex-wrap gap-24 justify-between mt-16 md:mt-40 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute w-[70%] left-[10rem] bottom-[-5rem] select-none hidden md:block"
                >
                    <Image src="/token.png" alt="token" width={1526} height={882} />
                </motion.div>

                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-24 w-full md:w-[30%]"
                >
                    <div>
                        <h3 className="prompt-semi text-4xl mb-1">5%</h3>
                        <p>{/* line svg */}</p>
                        <h5 className="prompt-regular text-transparent bg-clip-text gradient-6 text-2xl mt-3 mb-2">Buy Tax</h5>
                        {/* <p className="prompt-regular text-white/40">distributed back to token holders</p> */}
                    </div>
                    <div>
                        <h3 className="prompt-semi text-4xl mb-1">5%</h3>
                        <p>{/* line svg */}</p>
                        <h5 className="prompt-regular text-transparent bg-clip-text gradient-6 text-2xl mt-3 mb-2">Sell Tax</h5>
                        {/* <p className="prompt-regular text-white/40">fuels continued innovation</p> */}
                    </div>
                </motion.div>

                {/* Right side */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-24 w-full md:w-[30%]"
                >
                    <div>
                        <h3 className="prompt-semi text-4xl mb-1">Liquidity Pool</h3>
                        <p>{/* line svg */}</p>
                        <h5 className="prompt-regular text-transparent bg-clip-text gradient-6 text-2xl mt-3 mb-2">Locked</h5>
                        {/* <p className="prompt-regular text-white/40">drives ecosystem expansion</p> */}
                    </div>
                    <div>
                        <h3 className="prompt-semi text-4xl mb-1">CA</h3>
                        {/* <p>line svg</p> */}
                        <h5 className="prompt-regular text-transparent bg-clip-text gradient-6 text-2xl mt-3 mb-2">Renounced</h5>
                        {/* <p className="prompt-regular text-white/40">supports market stability</p> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Tokenomics;
