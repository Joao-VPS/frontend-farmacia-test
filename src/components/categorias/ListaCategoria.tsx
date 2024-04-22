import React, { useEffect, useState } from 'react'
import Categoria from '../../models/Categoria'
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../services/Service';
import CardCategorias from './CardCategorias';
import { DNA } from 'react-loader-spinner';

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  let navigate = useNavigate()

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch (error: any) {
      console.log(error)
      alert('Um erro ocorreu. Veja o log para mais detalhes.')
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length])

  function criarCategoria() {
    navigate('/criarCategoria')
  }

  return (
    <>
      {categorias.length === 0 && (
        <>
          <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel='dna-loading'
            wrapperStyle={{}}
            wrapperClass='dna-wrapper mx-auto' />

          <p>Parece que nenhuma categoria ainda foi criada...</p>
        </>
      )}
      <div className='flex justify-center w-full my-4'>
        <div className='container flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}

          </div>
        </div>
      </div>
      <button onClick={criarCategoria}>Deseja criar uma categoria?</button>
    </>
  )
}

export default ListaCategoria