

export const Formulario = () => {
  return (
    <>
      <h1>Realiza tu busqueda</h1>

      <form>

        <label for="busqueda"/>
        <input type="text" id="busqueda" name="busqueda" placeholder="introduzca su busqueda" required/>

        <input type="submit" value="Enviar"/>


      </form>
    </>
  )
}


