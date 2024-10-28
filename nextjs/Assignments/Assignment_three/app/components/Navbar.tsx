"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setnav] = useState(false)
    const [color, setcolor] = useState("transparent")
    const [textcolor, settextcolor] = useState("white")

    const handlnav =()=>{
        setnav(!nav)
    }

    useEffect(() => {
        const changcolor=()=>{
            if(window.scrollY >=90){
                setcolor(" #ffffff");
                settextcolor(" #000000")
            } else{
                setcolor("transparent")
                settextcolor("#ffffff")
            }
        };
        window.addEventListener('scroll', changcolor);
    }, []
    );

  return (
    <div style={{backgroundColor: `${color}`}} className="fixed top-0 left-0 w-full z-10 ease-in duration-300">
      <div className="max-w[1240px] text-white p-4 flex items-center justify-between">
        <Link href="/">
          <h2 style={{color: `${textcolor}`}} className="text-4xl font-bold">Zee</h2>
        </Link>
        <div>
          <ul style={{color: `${textcolor}`}} className="hidden sm:flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#Gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#insta">Instagram</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div onClick={handlnav} className="block sm:hidden z-10">
          {nav? <AiOutlineClose style={{color: `${textcolor}`}} size={20} /> : <AiOutlineMenu style={{color: `${textcolor}`}} size={20} />}
        </div>

        <div  className={`absolute top-0 ${
            nav ? 'left-0' : 'left-full'
          } right-0 bottom-0 flex justify-center items-center w-full h-screen sm:hidden bg-black text-center ease-in duration-300`}>
          <ul>
            <li onClick={handlnav} className="p-5 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li onClick={handlnav} className="p-5 text-4xl hover:text-gray-500">
              <Link href="/#Gallery">Gallery</Link>
            </li>
            <li onClick={handlnav} className="p-5 text-4xl hover:text-gray-500">
              <Link href="/#insta">Instagram</Link>
            </li>
            <li onClick={handlnav} className="p-5 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
