import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <nav className='w-full mt-10 bg-current md:w-3/4 z-50 rounded-full  h-[80px] px-0 md:px-8 py-3 fixed border border-yellow-600 flex items-center justify-around'>
    <div className='flex gap-0 md:gap-5 items-center'>
        {/* <img style={{filter:`drop-shadow(0 4px 6px rgb(24, 13, 65, 1))`}} className='h-[75px] py-2 align-middle rounded-full' src="/logo.png" alt="" /> */}
        <div className='flex flex-col items-center'><span className='font-bold text-2xl md:text-3xl font-serif text-green-400'>Springdale </span><span className='text-white font-bold'>Public School</span>
        </div>
    </div>
        <div>
            <ul className='md:flex hidden items-center h-full gap-5 text-white font-bold'>
              <a href="#home"> <li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Home</li></a>
              <a href="#aboutus"><li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>About As</li></a>
              <a href="#gallery"><li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Gallary</li></a>
              <a href="#contact"><li className=' h-[60px] inline-flex items-center px-2  hover:border-b-2 hover:border-green-500 transition ease-in-out duration-300 cursor-pointer '>Contact Us</li></a>
            </ul>
            <img className='md:hidden block' src="/menu-line.svg" alt="" />
        </div>
</nav>
  )
}

export default Navbar
