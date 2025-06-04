import React from 'react'
import { FaRegDotCircle, FaStar } from 'react-icons/fa'
import { IoAddOutline } from 'react-icons/io5'
import Header from './Header'
import UseRequest from '../api/UseRequest'
import Routes, { Server_URL } from '../api/Routes'
import {Swiper , SwiperSlide} from 'swiper/react'
import {FreeMode , Autoplay} from "swiper/modules"

const HeroSection = () => {

 const {data , err , loading} = UseRequest(`${Server_URL}${Routes.movies}`)

  return (
    <div>
      <Swiper
        modules={[FreeMode , Autoplay]}
             spaceBetween={16}
             slidesPerView={1}
             freeMode = {true}
             autoplay = {{
              delay : 2000,
              disableOnInteraction : false
             }}
      >
             {
        data && data.filter((res)=>res.is_banner).map((res)=>(
          <SwiperSlide>
             <div className='hero-section w-full'>
           <div className='relative w-full h-[32rem] overflow-hidden'>
               <div className=' absolute inset-0 z-0'>
                   <img src={res.banner} 
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
                      {res.name}
                    </h2>
                    <p className='text-slate-400 text-xs font-poppins w-1/2 mt-4 '>
                     {res.description}
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
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  )
}

export default HeroSection
