import React from 'react'
import Image from 'next/image'

const Companies = () => {
  return (
    <div className='h-[170px] bg-[#f7f7f7] w-full md:h-[238px] flex items-center'>
        <div className='lg:mx-2 w-[90%] h-[80%] m-auto flex items-center justify-between flex-col md:flex-row md:w-full'>
            <div><h2 className='font-extrabold text-xl md:text-2xl'>Trusted 200+ companies world wide.</h2></div>
            
            <div className='h-[40px] w-full relative md:h-[65px]'>
            <Image
              src="/images/Logos.png"
              alt="Heroimg"
              layout="fill"
               objectFit="cover"
               objectPosition='left'
            />
            </div> 
        </div>
    </div>
  )
}

export default Companies