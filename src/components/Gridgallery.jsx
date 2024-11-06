import { Cards } from "./cards"


export const Gridgallery = ({categoria}) => {
  const dataFetch=[
    {
      id:1,
      nombre:"imagen1",
      autor:"autor1"
    },
    {
      id:2,
      nombre:"imagen2",
      autor:"autor2"
    },
    {
      id:3,
      nombre:"imagen3",
      autor:"autor3"
    }
  ]

  return (
    <>
        {dataFetch.map(({id,nombre,autor})=>
          <Cards key={id} id={id} nombre={nombre} autor={autor}/>
        )}

    </>
  )
}
