import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa6'

interface TsProps {
    image: string;
    name: string;
    position: string;
  }
  
const TestimonialCards: React.FC<TsProps>= ({image, name, position})=> {
  return (
    <div className='w-full outline outline-1 h-full flex items-center'>
        <div className='flex flex-col gap-7 w-[75%] my-7 ml-7'>
            <div className='flex gap-1'>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
                <span><FaStar/></span>
            </div>

            <div>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</div>

            <div className='flex gap-3 items-center'>
                <div className='relative rounded-full h-[55px] w-[55px] overflow-hidden'>
                    <Image src={image} alt='image' layout='fill' objectFit='contain' />
                </div>

                <div>
                    <h2 className='font-bold'>{name}</h2>
                    <p>{position}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default TestimonialCards