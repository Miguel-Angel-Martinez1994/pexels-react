import { apiRest } from "../api/apiRest"


export const getPhotos=async(categoria)=>{
    if(!categoria) return

    const urlEndpoint=`search/?query=${categoria}`
    const url =`${import.meta.env.VITE_URL_BASE}/${urlEndpoint}`

    const {photos}=await apiRest()

    const data= photos.map(({id,photographer,alt,src:{medium}})=>(
        {
            id:id,
            photographer:photographer,
            alt:alt,
            src:medium
        }
    ))
    
   return data
}