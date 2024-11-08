import React, { useEffect, useState } from 'react'
import {getPhotos} from "../../helpers/getPhotos"

export const useFetch = (categoria) => {

    const {resultado,setResultado}=useState([])
    const[isLoading,setLoading]=useState(true)
    
    const getData=async()=>{
        const images=await getPhotos(categoria)
        setResultado(images)
        setLoading(false)
    }
   
    useEffect(()=>{
        getData()
    },[])

  return {
    resultado,
    isLoading
  }
}
