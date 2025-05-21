

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseRequest = (url) => {

    const [data , setdata] = useState(null)
    const [err , seterr] = useState(null)
    const [loading , setloading] = useState(false)

    useEffect(()=>{
        setloading(true)
        const fecthData = async() =>{
            const config ={
                headers: {"Content-Type" : "application/json"}
            }

            try{
                const response = await axios.get(url , config)
                setdata(response.data.result)
                setloading(false)
            }
            catch (err){
                seterr(err)
                setloading(false)
            }
        }

        fecthData()

    },[url])


    return {data , err , loading}

 
}

export default UseRequest
