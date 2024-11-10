import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


function SearchBar() {
  return (
    <div className="hidden lg:flex items-center justify-between bg-[#F8F8F8] rounded-lg p-2 w-full font-sans">
      <input type="text" placeholder='Search' className='border-none focus:outline-none bg-transparent text-gray-400 ml-2 w-full' />
      <AiOutlineSearch className='h-7 w-7 mx-2 hover:text-gray-400 cursor-pointer' /> 
    </div>
  );
}

export default SearchBar;
