'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeLogo = () => {
  const logos = [
    { src: "/item-1.svg", width: 224 },
    { src: "/item-2.svg", width: 224 },
    { src: "/item-3.svg", width: 240 },
    { src: "/item-4.svg", width: 112 },
    
  ];

  return (
     <div className="max-md:px-6 w-full">
      <div className="rounded-2xl py-4 overflow-hidden gradient-3 rounded-xl ml-auto">
        <Marquee
          speed={100}        // pixels per second
          pauseOnHover={true}  // nice touch!
        >
          <div className="flex items-center ga-x-6 lg:gap-x-21 py-2">
            {logos.map((logo, index) => (
            <Image
              key={index}
              className="w-40 mx-8"
              src={logo.src}
              alt="logo"
              width={logo.width}
              height={70}
              loading="lazy"
            />
          ))}
          </div>
        </Marquee>
      </div>
     </div>
  );
};

export default MarqueeLogo;
