'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeLogo = () => {
  const logos = [
    { src: "/item-1.svg", width: 150,height : 70 },
    { src: "/item-2.svg", width: 140 , height : 70 },
    { src: "/item-3.svg", width: 100,height : 40 },
    { src: "/item-4.svg", width: 182, height : 70 },
    
  ];

  return (
     <div className="max-md:px-6 w-full">
      <div className="rounded-2xl h-20 flex items-center overflow-hidden gradient-3 rounded-xl ml-auto">
        <Marquee
          speed={100}        // pixels per second
          pauseOnHover={true}  // nice touch!
        >
          <div className="flex items-center ga-x-6 lg:gap-x-21 py-2">
            {logos.map((logo, index) => (
            <Image
              key={index}
              className="mx-8"
              src={logo.src}
              alt="logo"
              width={logo.width}
              height={logo.height}
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
