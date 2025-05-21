import React from 'react'

import { FaRegDotCircle, FaStar } from 'react-icons/fa'
import {Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {FreeMode} from 'swiper/modules'

const MovieSwiperCard = ({data}) => {
  return (
    <div>
      <div className='popular-movies px-2 py-5 pb-10 mt-2'>
                <h3 className='text-2xl font-open text-white-100'>popular Movies</h3>
            <Swiper
             modules={[FreeMode]}
             spaceBetween={16}
             slidesPerView={7.2}
             freeMode = {true}
             breakpoints={{
              640: { slidesPerView : 2.5},
              768 : {slidesPerView : 3.5},
              1024 : {slidesPerView : 5.2}
             }}
            >
             
                  {
               data && data.filter((res)=>res.is_popular === true).map((res)=>(
                  <SwiperSlide>
                     <div className='movies-card mt-5'>
                    <div className='relative w-40 h-60 rounded-lg overflow-hidden cursor-pointer group'>
                        <img 
                          src={res.poster}
                          alt=''
                          className='w-full h-full rounded-lg  transition-transform duration-300 group-hover:scale-110'
                          />
                          <div className='text-contet absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <div className='backdrop-blur-md p-3 flex justify-between'>
                                <h4 className='text-sm font-poppins text-black-900 font-semibold'>{res.name}</h4>
                                <p className='flex items-center text-black-800 text-sm'>
                                  {res.Rating} <FaStar className='text-amber-600 ml-1'/>
                                </p>
                            </div>
      
                          </div>
                    </div>
                </div>
                  </SwiperSlide>
                ))
               }
            
            </Swiper>
             </div>
    </div>
  )
}

export default MovieSwiperCard
