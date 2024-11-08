import { Cards } from "./cards"
import { useFetch } from "./hooks/useFetch"


export const Gridgallery = (categoria) => {

  const {resultado:dataFetch}=useFetch(categoria)

  return (
    <>
      {/*
        {
          dataFetch.map(({id,nombre,autor})=>
          <Cards key={id} id={id} nombre={nombre} autor={autor}/>
        )}
      */} 
      
      {
        dataFetch.map(({id,photographer,alt,src})=>{
          <Cards key={id} id={id} nombre={src} autor={photographer} alt={alt}/>
        })
      }


    </>
  )
}
