import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between max-w-[1741.06px] mx-auto p-6 md:p-12 bg-gray-50">
      
      <div className="md:max-w-lg text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-[8vw] md:text-[3vw] font-bold text-black leading-tight md:leading-snug tracking-wide mb-5">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-[5vw] md:text-[1.5vw] font-medium text-[#787054] leading-tight md:leading-snug tracking-wide mb-8">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <a
          href="#"
          className="inline-block bg-[#A29875] text-white py-2 px-6 text-[5vw] md:text-[1.2vw] font-medium rounded-lg"
        >
          Explore Now
        </a>
      </div>

     
      <div className="relative w-[600px] h-[450px] md:w-[500px] md:h-[600px] border border-white rounded-[15%] overflow-hidden shadow-lg">
        <Image src="\slider-1.jpg.svg" alt="Jewelry Model" layout="fill" objectFit="cover" className="rounded-[15%]"/>
      </div>
    </section>
  );
}

export default Hero;
