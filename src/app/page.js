'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import PrimaryButton from "./components/Button";
import SecondaryButton from "./components/SecondaryButton";
import MarqueeLogo from "./components/Partners-Marquee";
import Accordion from "./components/Accordian";
import Future from "./components/Future";
import Join from "./components/Join";
import MessagingApp from "./components/MessagingApp";
import Privacy from "./components/Privacy-Dashboard";
import PrivacyApp from "./components/PrivacyApp";
import Web3 from "./components/Web3";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Faqs from "./components/FAQs";
// import Faqs from "./components/FAQs";
import Footer from "./components/Footer";
import BlurText from "./components/Animations/BlurText";
import ShinyText from "./components/Animations/ShinyText";
import Typewriter from "./components/Animations/Typewriter";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="bg-[#1B1B1B]">
      <div className="hero-bg border-b-2 border-white/5">
        <div className="w-full xl:container mx-auto md:px-6">
        <Navbar/>
         <main className="md:text-center text-white relative" id="about">
          <Image
                    src="/planet.png"
                    alt="Planet"
                    width={500}
                    height={500}
                    priority
                    className="glow-animate drop-shadow-2xl absolute bottom-[0rem] max-md:left-0 max-md:relative max-md:top-16 left-[15rem] w-full md:w-[43rem]"
                  />
      
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 py-16 lg:py-24">
             
              <div className="flex flex-col items-center gap-6">
                <BlurText
                  text="Privacy-First Tools for Web3"
                  delay={150} // time between each word/letter animation
                  className="text-5xl prompt-semi md:text-7xl max-md:leading-[120%] md:max-w-2xl text-white text-center"
                  animateBy="words" // or "letters"
                  direction="top" // or "bottom"
                  stepDuration={0.4}
                  onAnimationComplete={() => console.log("Animation Finished!")}
                />
                    <Typewriter  texts={[
                    "Take back control of your digital life with enterprise-grade privacy tools built for the decentralized future",
                    ]}
                    className="prompt-regular max-w-xl mx-auto text-lg text-white/63 text-center" />
                <div className="flex gap-4 mt-4 flex-wrap justify-center">
                   <PrimaryButton text="Explore the mesh" url="#" />
                   <SecondaryButton text="Explore Products" url="#products" />
                </div>
              </div>

            
              <div className="relative flex flex-wrap items-center justify-between mt-20 items-center">
              
                <div className="text-white/63 prompt-regular  text-base lg:w-[35%]">
                  <p className="flex gap-8 items-start">
                    <Image src="/line.svg" alt="line" width={100} height={2} className="mt-[0.5rem]"/>
                    <ShinyText text="Sentrax AI empowers you with unprecedented control over your personal data while delivering seamless, intuitive experiences across every platform. Our comprehensive ecosystem includes secure messaging, privacy dashboards, AI powered camera protection, and revolutionary social tools—all built with privacy-by-design principles." className="text-left" />
                    {/* A decentralized AI mesh for private access, encrypted autonomy, and off-grid freedom — without servers, surveillance or data trails */}
                  </p>
                  {/* <PrimaryButton text="Get Started" url="#" className="mt-4 md:ml-18" /> */}
               
                  <div className="mt-28 gradient-2 rounded-xl p-6 md:w-[50%]">
                    <p className="text-white text-sm prompt-regular font-semibold text-left max-md:pr-32">
                      Decentralized Privacy Layer Stay connected through secure, peer-to-peer mesh messaging with no servers, no metadata, and no central control.
                    </p>
                    <button className="mt-4 text-white/63  w-full text-end">
                      Learn More
                    </button>
                  </div>

               
                  <div className="flex gap-6 mt-6">
                    <a href="" className="duration-200 hover:scale-120">
                       <Image src="/x.png" alt="x" width={40} height={40} className="glow-animate" />
                    </a>
                    <a href="" className="duration-200 hover:scale-120" >
                       <Image src="/tg.png" alt="x" width={40} height={40}className="glow-animate" />
                    </a>
                  </div>
                </div>

              
                <div className="relative flex flex-col items-center text-center lg:text-left w-full md:w-[25%]">
                  <div className="mt-8 space-y-6 w-full relative">
                    <Image src="/arrow-2.png" alt="arrow" width={18} height={239} className="absolute md:w-5 bottom-[2.6rem] md:bottom-[2rem]"/>
                    <div className="flex flex-col items-start py-6">
                      <p className="text-white prompt-regular-i text-left text-xl flex items-center md:items-start gap-4 !leading-[150%]">
                       <Image src="/shield.svg" alt="x" width={40} height={40} />
                        VALIDATORS<br/>SECURING NETWORK
                      </p>
                      <p className="prompt-regular text-xl mt-12 ml-8">450+ Active Validators</p>
                      <p className="text-white/63 text-sm text-left ml-8">
                        Independent validators distributed globally, securing and authenticating the Sentrax mesh.
                      </p>
                    </div>

                    <div className="flex flex-col items-start pl-8">
                      <p className="prompt-regular text-xl font-bold mt-2">5,000+ Relays Processed</p>
                      <p className="text-white/63 text-sm text-left">
                        Encrypted peer-to-peer hops verified across the network during testnet and pilot deployments.
                      </p>
                    </div>

                    <div className="flex flex-col items-start pl-8">
                      <p className="prompt-regular text-xl font-bold mt-2">Growing Ecosystem</p>
                      <p className="text-white/63 text-sm text-left">
                        From encrypted messaging to private hosting and token swaps, Sentrax is expanding into a full privacy-native layer.
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* ---------partners--------- */}
      <div className="overflow-x">
        <div className="flex max-md:flex-wrap items-center gap-12">
            <p className=" ml-6 md:ml-12 prompt-bold text-4xl md:w-40 max-md:mt-6">Partners</p>
            <MarqueeLogo />
        </div>
      </div>

      {/* ---------why choose------- */}
      <section className="xl:container mx-auto px-6 py-16" id="why-choose">
        <div className="flex flex-wrap gap-8 items-center justify-between">
           <BlurText text="Why Choose Sentrax AI?" className="prompt-medium text-5xl md:text-7xl !leading-[140%] md:w-[40%]" />
           <ShinyText text="Sentrax AI empowers users with unprecedented control over their
            personal data while delivering seamless, intuitive experiences across every platform."
            className="text-white/63% lg:w-[35%] prompt-regular"
            />
        </div>

        <div className="mt-12 flex flex-wrap items-end justify-between">
          <div className="w-full md:w-[48%] lg:w-[32%]">

             <motion.div className="gradient-2 p-8 rounded-xl"
             initial={{ opacity: 0, y: 100 }}      // hidden at start
             whileInView={{ opacity: 1, y: 0 }}    // animate when in view
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.3 }} // animate once, when 30% visible
             >
               <p className="prompt-regular text-white/63">
                 Sentrax AI is a game-changer in digital privacy, offering a powerful suite of tools built from the ground up for the Web3 ecosystem. As our digital lives expand, the need for robust privacy has never been more critical.
               </p>
               <div className="flex items-center justify-between mt-4">
                <a href="#" className="prompt-regular text-white">
                  Learn More
                </a>
                <Image src="/people.png" alt="people" height={42} width={139} />
               </div>
             </motion.div>

             <motion.ul 
             className="flex justify-between mt-8 mb-4"
             initial={{ opacity: 0, y: 50 }}      // hidden at start
             whileInView={{ opacity: 1, y: 0 }}    // animate when in view
             transition={{ duration: 0.8, ease: "easeOut" }}
             viewport={{ once: true, amount: 0.5 }} 
             >
              <li><a href="">CREATION</a></li>
              <li><a href="">SECURITY</a></li>
              <li><a href="">SOLUTION</a></li>
             </motion.ul>
          </div>

          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Image src="/mobile.png" alt="mobile" width={462} height={521} className="w-full" />
          </div>
          
          <div className="w-full md:w-[48%] lg:w-[32%]">
            <Accordion />
          </div>
        </div>
      </section>

     <div style={{backgroundImage: "url(/glob.png)", backgroundRepeat: 'no-repeat', backgroundSize :'cover', backgroundPosition : '50% 45%',}} className="max-md:bg-[0%_50%]">
       {/* -----------future-------- */}
      <Future />
      {/* -------Join------------- */}
      <Join />
     </div>
      {/* ---------messaging app------------- */}

        <div className="relative overflow-visible" id="products">
        <MessagingApp />
        <Privacy />
        <PrivacyApp />
        <Web3 />
        </div>

      {/* ---------tokenomics----------- */}
      <Tokenomics />
      <Roadmap />
      <Faqs />
      <Footer/>
    </div>
  );
}
