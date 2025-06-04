import React from 'react'
import HeroSection from '../../components/HeroSection'
import Gener from '../../components/Gener'
import UseRequest from '../../api/UseRequest'
import Routes, { Server_URL } from '../../api/Routes'
import MovieSwiperCard from '../../components/MovieSwiperCard'

const Movie = () => {

  const {data , err , loading} = UseRequest(`${Server_URL}${Routes.movies}`)
  return (
    <div>
      <HeroSection />
      <Gener/>
      <MovieSwiperCard data={data} />
    </div>
  )
}

export default Movie
