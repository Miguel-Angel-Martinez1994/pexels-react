import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Galeria } from './components/Galeria'

function App() {

  return (
    <>
      <header className='cabecera'>
          <h1>API PEXELS MIGUEL</h1>
      </header>

      <main>
        <Galeria/>
      </main>

    <footer>

    </footer>

    </>
  )
}

export default App
