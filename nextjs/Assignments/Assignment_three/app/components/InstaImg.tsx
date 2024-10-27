import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa6";

interface InstaImgProps {
  socialimg: StaticImageData;
}

const InstaImg: React.FC<InstaImgProps> = ({ socialimg }) => {
    return(
    <div className="relative">
        <Image src={socialimg} alt="/" className="w-full h-full" layout="resonsive"/>
        <div className=" flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/50 group ">
        <p className="text-gray-300 hidden group-hover:block cursor-pointer "><FaInstagram size={30}/></p>
        </div>
    </div>
    )
}

export default InstaImg