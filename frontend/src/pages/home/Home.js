import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { FaRegDotCircle, FaStar } from 'react-icons/fa'
import { IoAddOutline } from 'react-icons/io5'


const Home = () => {
  return (
    <div className="bg-black w-full h-full flex">
     
      <div className='w-full'>
      <div className='hero-section w-full'>
           <div className='relative w-full h-[32rem] overflow-hidden'>
               <div className=' absolute inset-0 z-0'>
                   <img src='https://i.pinimg.com/736x/6c/fa/1c/6cfa1ce8662b37fbebe8f6adfbf2947c.jpg' 
                   className='w-full h-full object-cover'
                   alt=''
                   />
                   <div className='absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent w-4/6'/>
               </div>
               <div className='relative z-10  px-10'>
                  <Header/>
               </div>


              <div className='hero-content relative flex items-center h-full px-10 pb-20 '>

               <div className='space-y-8'>
               <div className='w-full space-y-6'>
                   <div className='rounded-md border border-red-600 flex justify-center items-center w-20'>
                     <FaRegDotCircle className='text-red-600 w-2 h-2'/>
                       <button className='px-2 py-1 text-white-300 text-xs font-medium uppercase tracking-wider bg-opacity-10 backdrop-blur-md'>
                        Live
                       </button>
                   </div>
                </div>

                <div className='title-description'>
                    <h2 className='text-4xl font-bold text-white-100 font-open leading-tight'>
                      Thor Dark World
                    </h2>
                    <p className='text-slate-400 text-xs font-poppins '>
                      Thor is  a one of the powerfull God
                    </p>
                </div>

                <div className='flex items-center space-x-12 pt-4'>
                  <button className='bg-amber-600 hover:bg-amber-700 transition-colors text-white-100 rounded-md w-36 h-12 font-semibold text-sm  shadow-lg'>
                    Watch Now 
                  </button>
                  <div className='w-12 h-12 flex items-center justify-center rounded-lg border border-white-100 hover:border-white-300 transition-colors'>
                    <IoAddOutline className='text-white-100 w-6 h-6'/>
                  </div>
                </div>
                  
               </div>
              </div>

           </div>
       </div>

       <div className='popular-movies px-2 py-5 pb-10 mt-6'>
          <h3 className='text-2xl font-open text-white-100'>popular Movies</h3>
          <div className='movies-card mt-5'>
              <div className='relative w-40 h-60 rounded-lg overflow-hidden cursor-pointer group'>
                  <img 
                    src='https://i.pinimg.com/736x/55/fd/2f/55fd2f65b3740b7fbd1b159e478450e2.jpg'
                    alt=''
                    className='w-full h-full rounded-lg  transition-transform duration-300 group-hover:scale-110'
                    />
                    <div className='text-contet absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='backdrop-blur-md p-3 flex justify-between'>
                          <h4 className='text-sm font-poppins text-black-900 font-semibold'>Star Wars</h4>
                          <p className='flex items-center text-black-800 text-sm'>
                            4.6 <FaStar className='text-amber-600 ml-1'/>
                          </p>
                      </div>

                    </div>
              </div>
          </div>
       </div>
      </div>
      
    </div>
  )
}

export default Home
