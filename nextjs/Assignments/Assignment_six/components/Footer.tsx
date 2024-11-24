import React from "react";
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="w-[90%] m-auto flex flex-col my-14 gap-6">
        <div className="md:flex justify-between my-8 items-center">
          <div className="text-center md:text-left ">
            <h2 className="font-bold text-lg">Subscribe to our newsletter</h2>
            <p className="my-7 md:my-1 text-sm md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div>
            <div className="md:flex gap-x-6 items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-3 px-3 md:text-sm outline outline-1 rounded-md "
              />
              <button className="w-full md:w-auto py-3 px-6 outline outline-1 rounded-md text-center my-5 md:my-0">
                Subscribe
              </button>
            </div>
            <div className="text-center text-[12px] md:mt-2 md:text-left">
              By subscribing you agree with our{" "}
              <a href="/" className="underline text-black">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="w-full text-center md:text-start ">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4">
            <div className="relative w-full h-10 flex justify-center">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="flex items-center flex-col gap-y-5 md:items-start">
              <span className="font-bold">Courses</span>
              <span>Business</span>
              <span>Developement</span>
              <span>Technology</span>
              <span>Design</span>
              <span>Programming</span>
            </div>

            <div className="flex items-center flex-col gap-y-5 md:items-start">
              <span className="font-bold">Resources</span>
              <span>Career</span>
              <span>Resume</span>
              <span>Learning</span>
              <span>Interview Prepration</span>
              <span>Jobs</span>
            </div>

            <div className="flex items-center flex-col gap-y-5 md:items-start">
              <span className="font-bold">About Us</span>
              <span>Contact</span>
              <span>Help/Support</span>
              <span>FAQ</span>
              <span>Terms and Conditions</span>
              <span>Partners</span>
            </div>
          </div>
        </div>
        <div className="w-full border-b mt-7 border-b-black"></div>

        <div className="flex flex-col gap-5 w-full justify-between md:flex-row md:text-sm">
          <div className="text-center items-center md:text-start flex flex-col md:flex-row gap-4">
            <div className=" md:whitespace-nowrap">2023 Ddsgnr. All rights reserved.</div>

            <div className="flex w-full md:gap-5 justify-evenly my-6 md:my-0 ">
              <span><a href="/" className="underline text black">
                Privacy Policy
              </a></span>
              <span><a href="/" className="underline text black">
                Terms of Service
              </a></span>
              <span><a href="/" className="underline text black">
                Cookies Settings
              </a></span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-3">
                <span><FaFacebookF className="h-5 w-5 "/></span>
                <span><FaInstagram className="h-5 w-5"/></span>
                <span><FaTwitter className="h-5 w-5 "/></span>
                <span><FaLinkedin className="h-5 w-5"/></span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
