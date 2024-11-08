import React from 'react'

export const apiRest = async(url,method='GET',body={},Authorization="") => {
        try{
            const resp =await fetch(url,{
                method:method,
                headers:{
                    Authorization:`${import.meta.env.VITE_API_KEY_PEXELS}`
                }
            })

            if(resp.ok){
                return resp.json()
                //setResultado(data) 
            }else{
                throw(`ERROR EN LA API`)
            }

        }catch(error){
            console.log(error)
            throw(error)
        }
    
}
