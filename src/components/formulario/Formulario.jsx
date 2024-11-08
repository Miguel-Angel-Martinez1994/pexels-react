import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const Formulario = ({onNewCategory}) => {

  const {formulario,handlerSubmit,handlerChange}=useForm(onNewCategory)

  useEffect(()=>{
    //el .trim() elimina espacios en blanco por delante y por detras, en este caso de la busqueda
    if(formulario.busqueda !="" && formulario.busqueda !=formulario.busqueda) onNewCategory(formulario.busqueda.trim()) 
  },[formulario])

  return (
    <>
      <h1>Realiza tu busqueda</h1>

      <form  
        id="formulario" 
        name="formulario"
        onSubmit={handlerSubmit}
      >

        <label htmlFor="busqueda"/>
        <input 
          type="text" 
          id="busqueda" 
          name="busqueda" 
          placeholder="introduzca su busqueda" 
          required
          //onChange={handlerChange}
          />

        <input type="submit" value="Enviar"/>


      </form>
    </>
  )
}


