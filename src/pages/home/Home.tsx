import React from 'react'
import CardProduto from '../../components/produtos/CardProduto'
import ListaCategoria from '../../components/categorias/ListaCategoria'

function Home() {
  return (
    <div className='min-h-[68vh]'>
      <h2 className='text-4xl font-bold'>Seja bem-vindo!</h2>
      <ListaCategoria />
    </div>
  )
}

export default Home