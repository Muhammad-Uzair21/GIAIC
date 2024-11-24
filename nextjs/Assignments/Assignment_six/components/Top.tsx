import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Top = () => {
  return (
    <div className='hidden md:flex lg:flex items-center justify-center w-screen h-[54px] mb-5 bg-[#F7F7F7] border-b-2 border-black'>
        <div className='h-[100%] w-[90%] m-auto  flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3 text-sm'>
                <p>Phone Number: 956 742 455 678</p>
                <p className='font-extralight'>|</p>
                <p>Email:info@ddsgnr.com</p>
            </div>
            <div className='flex items-center gap-5'>
                <FaFacebookF className='h-5 w-5'/>
                <FaInstagram className='h-5 w-5'/>
                <FaTwitter className='h-5 w-5'/>
                <FaLinkedin className='h- w-5'/>
            </div>
        </div>
    </div>
  )
}

export default Top