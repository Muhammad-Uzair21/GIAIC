import React from 'react'
import { BiAlarm, BiBookOpen, BiBriefcase, BiCodeAlt, BiLink, BiMicrophone, BiPen, BiSolidGraduation, BiUserVoice } from 'react-icons/bi'
  
const Category = () => {
  return (
    <div className='w-screen flex items-center flex-col text-center md:text-left'>
        <div className='mt-24 mb-16'>
            <h2 className='font-bold text-4xl mb-8'>Explore Courses By Category</h2>
            <p className='text-sm'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>


    <div className='md:w-full'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-14">

        <div className="flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiPen className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Design & Development</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiAlarm className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Marketing</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiCodeAlt className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Development</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiMicrophone className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Communication</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiLink className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Digital Marketing</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiUserVoice className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Self Development</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiBriefcase className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Business</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiBookOpen className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Finance</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 bg-[#f7f7f7] px-7 py-9 rounded-md">
          <div className="flex items-center justify-center w-20 h-16 bg-white rounded-md text-xl">
            <BiSolidGraduation className='h-7 w-7'/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="text-sm ">50+ Courses Available</p>
          </div>
        </div>

      </div>
    </div>
            <div><button className='outline outline-1 py-3 px-4 my-16 rounded-md text-sm'>View All Courses</button></div>
    </div>
  )
}

export default Category