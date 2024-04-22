import React from 'react'
import Categoria from '../../models/Categoria'
import { Link } from 'react-router-dom'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-emerald-700 text-white font-bold text-2xl'>Categoria: {categoria.nome}</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      <div className='flex'>
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full duration-300 text-slate-100 bg-indigo-400 hover:bg-indigo-800 hover:text-indigo-300 flex items-center justify-center py-2'>
          Editar
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 duration-300 bg-red-400 hover:bg-red-700 hover:text-red-300 w-full flex items-center justify-center'>
          Deletar
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias