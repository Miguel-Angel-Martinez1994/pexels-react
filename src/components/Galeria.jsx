
import { Formulario } from "./Formulario"
import { Gridgallery } from "./Gridgallery"

export const Galeria = () => {
  const categorias=["ciudades","animales","oceano"]

  return (
    <>
      <Formulario/>
      <h3>Galeria de Fotos</h3>

      <section>{
          categorias.map((categoria)=>
          <Gridgallery key={categoria} categoria={categoria}/>
        )
      }</section>
    </>
  )
}


