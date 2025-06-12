import React, { useState } from 'react'
import HeroSection from '../../components/HeroSection'
import Gener from '../../components/Gener'
import UseRequest from '../../api/UseRequest'
import Routes, { Server_URL } from '../../api/Routes'
import MovieSwiperCard from '../../components/MovieSwiperCard'
import Loading from '../../utils/Loading'

const Movie = () => {

  const [genereId , setGenereId] = useState(1)
  const [genereName , SetGenereName] = useState("Action")

  const {data , err , loading} = UseRequest(`${Server_URL}${Routes.filter_genere}${genereId}`)

const GenereClickEvent =(genere)=>{
  console.log(`the movie genere is ${genere.name}`)
  setGenereId(genere.id)
  SetGenereName(genere.name)
}

  return (
    <div>
      <HeroSection />
      <Gener  onSeletedGenere ={GenereClickEvent}/>
      {/* {
        loading && <Loading/>
      } */}
      <MovieSwiperCard data={data} is_popular = {false} title={genereName}/>
    </div>
  )
}

export default Movie
