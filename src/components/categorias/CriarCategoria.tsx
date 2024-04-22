import React, { ChangeEvent, useEffect, useState } from 'react'
import Categoria from '../../models/Categoria'
import { useNavigate, useParams } from 'react-router-dom'
import { atualizar, buscar, cadastrar } from '../../services/Service'

function CriarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error: any) {
      console.log(error)
      alert('Ocorreu um erro. Verifique o log')
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  function mostrarErro(error: any) {
    let errorList = error.response.data.errors

    if (errorList.length === 0) {
      alert('Erro ao cadastrar categoria')
    } else {
      errorList.map((erro: { defaultMessage: string }) => {
        alert(erro.defaultMessage)
      })
    }
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria)

        alert('Categoria atualizada com sucesso')
        retornar()

      } catch (error: any) {
        mostrarErro(error)
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria)
        alert('Categoria cadastrada com sucesso')
        retornar()
      } catch (error: any) {
        mostrarErro(error)
      }
    }
  }

  function retornar() {
    navigate('/categorias')
  }

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h1 className='text-4xl text-center my-8'>
        {id === undefined ? 'Cadastre um novo tema' : 'Editar tema'}
      </h1>

      <form className='w-1/2 flex flex-col gap-4' onSubmit={gerarNovaCategoria}>
        <div className='flex flex-col gap-2'>
          <label htmlFor="descricao">Nome da categoria</label>
          <input
            type="text"
            placeholder='Nome'
            name='nome'
            className='border-2 border-slate-700 rounded p-2'
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder='Descrição'
            name='descricao'
            className='border-2 border-slate-700 rounded p-2'
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className='rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block'
          type='submit'>
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  )
}

export default CriarCategoria