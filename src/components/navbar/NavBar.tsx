import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className='fixed w-full bg-emerald-800 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>Farmacia.name</div>
  
          <div className='flex flex-wrap gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/produtos' className='hover:underline'>Postagens</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
          </div>
        </div>
      </div>
      <div className='py-12 md:py-8'/>
      </>
  )
}

export default NavBar