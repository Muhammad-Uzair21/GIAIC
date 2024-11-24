import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="h-[72px] w-screen bg-[#f7f7f7] flex items-center justify-center border-b-2 border-[#676767]">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div className="relative h-[44px] w-full">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="hidden lg:flex bg-white h-[44px] items justify-between">
          <div className="flex items-center gap-5">
            <div className="px-5 py-2 font-semibold border-b-2 border-black">Home</div>
            <div className="px-5 py-2 whitespace-nowrap">Courses</div>
            <div className="px-5 py-2 whitespace-nowrap">Services</div>
            <div className="px-5 py-2 whitespace-nowrap">Achievements</div>
            <div className="px-5 py-2 whitespace-nowrap">About Us</div>
            <div className="px-5 py-2 whitespace-nowrap">Testimonial</div>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 rounded-lg outline outline-1">Login</button>
            <button className="px-5 py-2 rounded-lg bg-black text-white whitespace-nowrap">Sign Up</button>
          </div>
        </div>
        <FaBars className="lg:hidden h-5 w-5" />
      </div>
    </div>
  );
};

export default Header;
