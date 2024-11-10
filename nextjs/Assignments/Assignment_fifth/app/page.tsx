import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white">
      <Header />
      <div className="h-[88%] flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex items-center justify-between">
          <div className="w-[55%] flex flex-col items-start font-serif">
            <h2 className=" text-4xl font-bold leading-normal ">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h2>
            <p className=" text-[#787054] leading-normal text-2xl mt-6 mb-6">
              An example of intricate workmanship and detail, elegant necklaces
              and long and short chains form a part of our desirable collection.
            </p>
            <button className="bg-[#A29875] text-white px-10 py-2 font-semibold rounded-md hover:bg-[#c5b98f]  cursor-pointer">Explore Now</button>
          </div>
          <div className="relative w-[30%] h-full rounded-tl-[120px] rounded-br-[120px] overflow-hidden">
            <Image
              src="/images/heroimg.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
