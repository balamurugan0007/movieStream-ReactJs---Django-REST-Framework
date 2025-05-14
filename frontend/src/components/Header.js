import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='w-full h-24'>

        <div className='flex justify-between items-center mt-6 '>
                <div className='logo flex items-center w-1/3'>
                    <FaPlayCircle className='text-amber-600 w-16 h-16 ' />
                    <h3 className='text-lg font-poppins text-slate-50 ml-4'>Movie</h3>
                </div>
                <div className='navbar-items flex justify-between items-center w-1/3'>
                <h4 className='text-sm text-slate-50 font-open ml-3 cursor-pointer'>Home</h4>
                    <h4 className='text-sm text-slate-50 font-open ml-3 cursor-pointer'>Movies</h4>
                    <h4 className='text-sm text-slate-50 font-open ml-3 cursor-pointer'>Series</h4>
                    <h4 className='text-sm text-slate-50 font-open ml-3 cursor-pointer'>Animations</h4>
                  
                </div>
                <div className='action-items flex justify-end items-center w-1/3'>
                    <CiSearch className='text-slate-500 w-6 h-6 '/>
                    <div className=' rounded-full w-12 h-12 ml-5 overflow-hidden'>
                    <img src='https://i.pinimg.com/736x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg' className='w-full h-full  ' />
                    </div>
                </div>
        </div>

      
    </div>
  )
}

export default Header
