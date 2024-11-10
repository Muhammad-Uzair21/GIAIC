import React from 'react'
import SearchBar from './Searchbar'
import { BiCartAlt, BiHeart, BiUser } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='h-[12%] w-full bg-[#A29875] flex items-center'>
        <div className='w-full m-auto flex items-center'>
            <h2 className='text-white text-5xl text-center w-[25%]'>Purity</h2>
            <div className='flex items-center justify-center w-[70%] space-x-6 '>
              <SearchBar />
              <div className='flex space-x-5'>
                <BiHeart className='h-7 w-7 text-white hover:text-black cursor-pointer' />
                <BiUser className='h-7 w-7 text-white hover:text-black cursor-pointer' />
                <BiCartAlt className='h-7 w-7 text-white hover:text-black cursor-pointer' />
              </div>
              <FaBars className='lg:hidden h-7 w-7 text-white hover:text-black cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Header