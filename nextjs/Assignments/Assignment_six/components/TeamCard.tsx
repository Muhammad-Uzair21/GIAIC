import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa6'
import { BiGlobe } from 'react-icons/bi'

interface TeamProps {
    image: string;
    name: string;
    position: string;
  }
  
const TeamCard: React.FC<TeamProps>= ({image, name, position}) => {
  return (
    <div className='flex flex-col items-center w-full'>
        <div className='w-[80px] h-[80px] relative'>
            <Image src={image} alt='image' layout='fill' objectFit='contain'/>
        </div>

        <div className='my-8'>
            <h2 className='font-bold text-2xl'>{name}</h2>
            <p className='text-lg'>{position}</p>
        </div>

        <div className='flex items center gap-5'>
            <span><FaLinkedin  className='h-6 w-6'/></span>
            <span><FaTwitter  className='h-6 w-6'/></span>
            <span><BiGlobe  className='h-6 w-6'/></span>
        </div>
    </div>
  )
}

export default TeamCard