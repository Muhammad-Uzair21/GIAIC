import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center">

      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
        <div className="w-[90%]">
          <h2 className="text-4xl md:text-6xl font-bold">Learn new skills online with ease</h2>
          <p className="text-sm my-6 md:text-xl">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex gap-4">
            <button className="px-4 py-3 md:px-4 md:py-3 bg-black text-white rounded text-sm md:text-base whitespace-nowrap">Start Learning Now</button>
            <button className="px-4 py-3 md:px-4 md:py-3 outline outline-1 rounded text-sm md:text-base whitespace-nowrap">Explore Courses</button>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <Image
          src="/images/Image.png"
          alt="Heroimg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Hero;
