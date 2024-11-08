import { useEffect } from "react"
import { Cards } from "./cards"
import { useFetch } from "./hooks/useFetch"


export const Gridgallery = (categoria) => {

  const {resultado:dataFetch,isLoading}=useFetch(categoria)

  useEffect(()=>{
    console.log({dataFetch})
  },[])

  //leer los difertentes hooks,en especial el hook useMemo

  return (
    <>
      {
        isLoading && <p>CARGANDO...</p>
      }
      
      {
        dataFetch.map(({id,photographer,alt,src})=>{
          <Cards key={id} id={id} src={src} autor={photographer} alt={alt}/>
        })
      }


    </>
  )
}
