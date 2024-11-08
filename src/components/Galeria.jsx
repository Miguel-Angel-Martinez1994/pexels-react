import { useState } from "react"
import { Formulario } from "./formulario/Formulario"
import { Gridgallery } from "./Gridgallery"

export const Galeria = () => {

  const [categorias,setCategorias]=useState([])


  const onNewCategory=(newCategory)=>{

    const existe=categorias.find((cat)=> cat==newCategory)
      if(!existe) return
    setCategorias([
      newCategory,
      ...categorias
    ])
  }

  console.log({categorias})

  return (
    <>
       <Formulario onNewCategory={onNewCategory}/>
        <h3>Galeria de Fotos</h3>

        <section>{

          categorias.map((categoria)=>{
            
            <Gridgallery key={categoria} categoria={categoria}/>
          } 
          
          )
        }
        </section>
    </>
  )
}


