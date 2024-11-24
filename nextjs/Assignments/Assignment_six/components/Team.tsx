import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='w-full bg-[#f7f7f7] text-center'>
        <div className='m-auto w-[90%] flex  flex-col'>
            <div className='my-10'>
                <h2 className='font-bold text-2xl mb-5 mt-10 md:text-4xl'>Our Team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className='my-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-y-20'>
                    <TeamCard name='James Nduku' position='Marketing Coordinator' image='/images/t1.png'/>
                    <TeamCard name='Jospeh Munyambu' position='Nursing Asisstant' image='/images/t6.png'/>
                    <TeamCard name='Joseph Ngumbau' position='Medical Asisstant' image='/images/t5.png'/>
                    <div className='hidden md:block'><TeamCard name='Erick Kipkembol' position='Web Designer' image='/images/t4.png'/></div>
                    <div className='hidden md:block'><TeamCard name='Stephen Kerobo' position='President of Sales' image='/images/t3.png'/></div>
                    <div className='hidden md:block'><TeamCard name='John Lebo' position='Dog Trainer' image='/images/t2.png'/></div>
                </div>
            </div>

            <div><button className='outline outline-1 py-2 px-4 my-8 rounded-md text-sm md:hidden'>View All</button></div>
        </div>
    </div>
  )
}

export default Team