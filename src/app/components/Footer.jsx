"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <motion.div
        className="xl:container mx-auto px-6 py-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Logo */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
        >
          <Image src="/logo.png" alt="logo" width={255} height={86} />
        </motion.div>

        {/* Footer Grid */}
        <motion.div
          className="flex flex-wrap gap-12 justify-between"
          variants={fadeUp}
        >
          {/* About */}
          <div>
            <h6 className="prompt-medium text-white text-lg mb-4">About</h6>
            <p className="prompt-regular text-white/63">
              A game-changer in digital privacy
            </p>
          </div>

          {/* Email */}
          <div>
            <h6 className="prompt-medium text-white text-lg mb-4">Email</h6>
            <a href="" className="prompt-regular text-white/63">
              support@sentrax.ai
            </a>
          </div>

          {/* Explore */}
          <div>
            <h6 className="prompt-medium text-white text-lg mb-4">Explore</h6>
            <div className="flex gap-12">
              <ul className="prompt-regular text-white/63 space-y-6">
                <li><a href="">About</a></li>
                <li><a href="">Why Choose Us?</a></li>
                <li><a href="">Our Services</a></li>
              </ul>
              <ul className="prompt-regular text-white/63 space-y-6">
                <li><a href="">Tokenomics</a></li>
                <li><a href="">Roadmap</a></li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h6 className="prompt-medium text-white text-lg mb-4">Resources</h6>
            <ul className="prompt-regular text-white/63 space-y-6">
              <li><a href="">Help Center</a></li>
              <li><a href="">Whitepaper</a></li>
              <li><a href="">Our Community</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="py-12 flex items-center gap-4 md:justify-end"
          variants={fadeUp}
        >
          <a href="">
            <Image src="/x.png" alt="x" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/tg.png" alt="telegram" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/insta.png" alt="instagram" width={30} height={30} />
          </a>
          <a href="">
            <Image src="/yt.png" alt="youtube" width={30} height={30} />
          </a>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="border-b border-[#fff]/15"></div>

      {/* Partner Logos */}
     
    </footer>
  );
};

export default Footer;
