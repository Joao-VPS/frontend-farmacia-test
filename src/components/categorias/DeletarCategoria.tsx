import React, { useEffect, useState } from 'react'
import Categoria from '../../models/Categoria'
import { useNavigate, useParams } from 'react-router-dom'
import { buscar, deletar } from '../../services/Service'

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      mostrarErro(error)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function mostrarErro(error: any) {
    let errorList = error.response.data.errors

    if (errorList.length === 0) {
      console.log(error)
      alert("Erro desconhecido ao apagar tema. Verifique o log para mais detalhes.")
    } else {
      errorList.map((erro: { defaultMessage: string }) => {
        alert(erro.defaultMessage)
      })
    }
  }

  function retornar() {
    navigate('/categorias')
  }

  async function apagaCategoria() {
    try {
      await deletar(`/categorias/${id}`)

      alert('Categoria apagada com sucesso')
      retornar()

    } catch (error: any) {
      mostrarErro(error)
    }
  }

  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
      <p className='text-center font-semibold mb-4'>
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
          Categoria: {categoria.nome}
        </header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
        <div className='flex'>
          <p onClick={retornar}
            className='text-slate-100 bg-indigo-400 hover:bg-indigo-600 w-full py-2'>Não</p>
          <p onClick={apagaCategoria}
            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full flex items-center justify-center'>Sim</p>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria