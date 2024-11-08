import { useState } from "react"


export const useForm = () => {

    const [formulario,setFormulario]=useState("")

    const serializeForm=(formulario)=>{
      const formData=new FormData(formulario)

      const data ={}

      for (let [name,value] of formData){
        data[name]=value
      }

      return data
    }

    const handlerSubmit=(ev)=>{
      ev.preventDefault()
  
      const data=serializeForm(ev.target)
  
      setFormulario(data)
      
    }
  
    //listener que escucha los cambios del formulario
    const handlerChange=({target})=>{
      const {name,value}=target
  
      setFormulario({
        ...formulario,
        [name]:value
      })
    }


    return {
      handlerSubmit,
      handlerChange,
      formulario
    } 
  
}
