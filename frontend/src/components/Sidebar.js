import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='w-full h-full flex justify-center items-center  '>


<div className="">
  <div className="nav-items flex flex-col  space-y-16 ">
  
    <div className=" mt-3  group border  rounded-md cursor-pointer hover:bg-amber-600 hover:border-transparent w-10 h-10 border-amber-300 flex justify-center items-center">
    <a href='/'> <IoHome className="text-gray-400 w-5 h-5 group-hover:text-gray-100" /></a> 
    </div>

  
    <div className=" mt-5  group border  rounded-md cursor-pointer hover:bg-amber-600 hover:border-transparent w-10 h-10 border-amber-300 flex justify-center items-center">
    <a href='/movie' > <FaPlayCircle className="text-gray-400 w-5 h-5 group-hover:text-gray-100" /> </a>
    </div>

    
    <div className="  mt-5  group border  rounded-md cursor-pointer hover:bg-amber-600 hover:border-transparent w-10 h-10 border-amber-300 flex justify-center items-center">
      <MdOutlineLiveTv className="text-gray-400 w-5 h-5 group-hover:text-gray-100" />
    </div>


    <div className=" mt-5   group border  rounded-md cursor-pointer hover:bg-amber-600 hover:border-transparent w-10 h-10 border-amber-300 flex justify-center items-center">
      <IoSettings className="text-gray-400 w-5 h-5 group-hover:text-gray-100" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Sidebar
