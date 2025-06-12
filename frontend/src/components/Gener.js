import React from 'react'
import UseRequest from '../api/UseRequest'
import Routes, { Server_URL } from '../api/Routes'

const Gener = ({onSeletedGenere}) => {

    const {data , err , loading} = UseRequest(`${Server_URL}${Routes.genere}`)

  return (
    <div className='p-6 mt-4 cursor-pointer'>
        
        <div className='grid grid-cols-2 lg:grid-cols-9 gap-5'>
          {
            data && data.map((res)=>(
                  <div onClick={()=>onSeletedGenere(res)} className='bg-black-950 text-slate-200 hover:bg-amber-600 p-3 rounded-lg shadow-lg transition duration-300 hover:scale-105 flex justify-center items-center'>
                <span className='text-lg font-semibold font-open'>{res.name}</span>
            </div>
            ))
          }
        </div>
      
    </div>
  )
}

export default Gener
