import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import CriarCategoria from './components/categorias/CriarCategoria'
import ListaCategoria from './components/categorias/ListaCategoria'
import DeletarCategoria from './components/categorias/DeletarCategoria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categorias' element={<ListaCategoria />} />
          <Route path='/criarCategoria' element={<CriarCategoria />} />
          <Route path='/editarCategoria/:id' element={<CriarCategoria />} />
          <Route path='/deletarCategoria/:id' element={<DeletarCategoria />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
