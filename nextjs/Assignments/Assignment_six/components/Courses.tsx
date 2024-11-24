import React from 'react'
import CoursesCard from './CoursesCard'

const Courses = () => {
  return (
    <div className='w-full'>
        <div className='w-[90%] flex  flex-col text-center m-auto'>
            <div>
                <h2 className='font-bold text-2xl mt-10 md:text-4xl'>Courses</h2>
                <p className='mt-6 text-sm md:text-lg'>Your Ultimate Guide to Learning</p>
            </div>
            <div className='my-10'>
                <div className='flex items-center text-sm justify-center'>
                    <div className='px-3 py-3 border-b-2 border-[#676767]'>Popular</div>
                    <div className='px-3 py-3'>Recommended</div>
                    <div className='px-3 py-3'>Best Price</div>
                </div>
                
                <div className='my-10 w-[100%]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-y-16'>
                        <CoursesCard course='Ui/Ux Design 101' tag='Design' image='/images/Ui.png'/>
                        <CoursesCard course='Introduction to Python' tag='Programming' image='/images/Python.png'/>
                        <CoursesCard course='Data Analysis for Beginners' tag='Business' image='/images/Data.png'/>
                        <div className='hidden md:block'><CoursesCard course='Art Specialization' tag='Arts' image='/images/Art.png'/></div>
                        <div className='hidden md:block'><CoursesCard course='Rule of Law' tag='Design' image='/images/Law.png'/></div>
                        <div className='hidden md:block'><CoursesCard course='Introduction to Webflow' tag='Tech' image='/images/webflow.png'/></div>
                    </div>
                </div>
                <div><button className='outline outline-1 py-3 px-4 my-5 rounded-md text-sm'>View All Courses</button></div>
            </div>
        </div>
    </div>
  )
}

export default Courses