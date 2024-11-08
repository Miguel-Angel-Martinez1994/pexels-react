import React, { useEffect, useState } from 'react'

export const useFetch = (categoria="forest") => {

    const {resultado,setResultado}=useState([])

    //const urlBase=`https://api.pexels.com/v1`
    const urlEndpoint=`search/?query=${categoria}`

    const conexionApi=async()=>{
        try{
            const resp =await fetch(`${import.meta.env.VITE_URL_BASE}/${urlEndpoint}`,{
                method:`GET`,
                headers:{
                    Authorization:`${import.meta.env.VITE_API_KEY_PEXELS}`
                }
            })

            if(resp.ok){
                const data = await resp.json()
                return data
                //setResultado(data) 
            }else{
                throw(`ERROR EN LA API`)
            }

        }catch(error){
            console.log(error)
            throw(error)
        }
    }

    
    const getResultados=async()=>{
        const {photos}=await conexionApi()

        const data= photos.map((photo)=>(
            {
                id:photo.id,
                photographer:photo.photographer,
                alt:photo.alt,
                src:photo.src.medium
            }
        ))
        
        setResultado(data)
    }

    useEffect(()=>{
        getResultados()
    },[])

  return {
    resultado
  }
}
