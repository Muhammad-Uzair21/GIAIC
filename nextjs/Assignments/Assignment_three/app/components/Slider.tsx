"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface Slide {
  image: string;
}

interface SlidesProp {
  slides: Slide[];
}

const Slider: React.FC<SlidesProp> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="Gallery" className="relative overflow-hidden max-w-[1240px] mx-auto h-[500px]">
      <h2 className="text-center text-2xl font-bold">Gallery</h2>
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`min-w-full transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
            style={{ height: '80vh' }}
          >
            <div className="relative h-full p-4 flex justify-center">
              <FaCircleArrowLeft 
                onClick={prevSlide} 
                className="absolute top-[50%] left-[30px] text-white/70 z-[2] cursor-pointer select-none" 
                size={40} 
              />
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt="Slide Image"
                  layout="fill"
                  className="absolute top-0 left-0"
                  objectFit="cover"
                />
              </div>
              <FaCircleArrowRight 
                onClick={nextSlide} 
                className="absolute top-[50%] right-[30px] text-white/70 z-[2] cursor-pointer select-none" 
                size={40} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
