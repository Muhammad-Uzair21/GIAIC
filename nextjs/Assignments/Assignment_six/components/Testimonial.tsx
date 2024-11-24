import React from "react";
import TestimonialCards from "./TestimonialCards";
import { FaCircle } from "react-icons/fa6";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="w-full md:bg-[#f7f7f7]">
      <div className="w-[90%] m-auto py-24 flex flex-col gap-16">
        <div className="flex text-center md:text-left flex-col gap-5">
          <h2 className="font-bold  text-3xl md:text-4xl">
            What Our Students Say!
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TestimonialCards
              image="/images/t5.png"
              name="James Nduku"
              position="Software Developer"
            />
            <div className="hidden md:block">
              <TestimonialCards
                image="/images/t1.png"
                name="Erick Kipkemboi"
                position="Scrum Master"
              />
            </div>
            <div className="hidden md:block">
              <TestimonialCards
                image="/images/t2.png"
                name="Stephen Kerubo"
                position="Ui/Ux Designer"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2">
            <span>
              <FaCircle className="h-3 w-3" />
            </span>
            <span>
              <FaCircle className="h-3 w-3 text-[#8d8d8d]" />
            </span>
            <span>
              <FaCircle className="h-3 w-3 text-[#8d8d8d]" />
            </span>
            <span>
              <FaCircle className="h-3 w-3 text-[#8d8d8d]" />
            </span>
            <span>
              <FaCircle className="h-3 w-3 text-[#8d8d8d]" />
            </span>
          </div>

          <div className="flex gap-2">
            <span>
              <ArrowLeftCircle className="h-12 w-12" />
            </span>
            <span>
              <ArrowRightCircle className="h-12 w-12" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
