import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface CardProps {
    image: string;
    tag: string;
    course: string;
  }
  
const CoursesCard: React.FC<CardProps> = ({image, tag, course}) => {
  return (
    <div className="w-full bg-[#f7f7f7] ">
      <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="Python"
          layout="fill"
          objectFit="Cover"
        />
      </div>
      
      <div className="flex items-center justify-center">
        <div className="w-[90%] m-auto my-5">
          <div className="flex items-center justify-between text-sm">
            <h2 className="font-semibold">{tag}</h2>
            <div className="flex gap-2 items-center">
              <span>
                <FaStar className="text-[#d9d9d9] text-lg" />
              </span>
              <span>5.0</span>
            </div>
          </div>

          <div className="my-5 text-left">
            <h2 className="text-xl font-bold">{course}</h2>
            <p className="text-sm my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos natus apt</p>
          </div>

          <div className="flex gap-7 items-center mb-2">
            <div><button className='outline outline-1 py-2 px-4 rounded-md'>Enroll Now</button></div>
            <div className="font-semibold">$400</div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
