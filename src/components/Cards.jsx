

export const Cards = ({id,src,autor,alt}) => {

//key={id} id={id} nombre={src} autor={photographer} alt={alt}

  return (
    <>
      <article>
        <h5>{id}</h5>
        <h5>{src}</h5>
        <h5>{autor}</h5>
        <h5>{alt}</h5>
      </article>
    </>
  )
}


