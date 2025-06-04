import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { FaRegDotCircle, FaStar } from 'react-icons/fa'
import { IoAddOutline } from 'react-icons/io5'
import MovieSwiperCard from '../../components/MovieSwiperCard'
import UseRequest from '../../api/UseRequest'
import Routes, { Server_URL } from '../../api/Routes'
import HeroSection from '../../components/HeroSection'


const Home = () => {


  const {data , err , loading} = UseRequest(`${Server_URL}${Routes.movies}`)


  return (
    <div className="bg-black w-full h-full flex">
     
      <div className='w-full'>
      <HeroSection/>

       <MovieSwiperCard data={data}/>
      </div>
      
    </div>
  )
}

export default Home
