import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

interface InstaImgProps {
  socialimg: string;
}

const InstaImg: React.FC<InstaImgProps> = ({ socialimg }) => {
  return (
    <div className="relative">
      <Image
        src={socialimg}
        alt="Instagram Image"
        className="w-full h-full"
        layout="responsive"
        width={500}
        height={500}
      />
      <div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block cursor-pointer">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
};

export default InstaImg;
