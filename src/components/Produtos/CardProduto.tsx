import React from 'react'
import Produto from '../../models/Produto'

interface CardProdutoProperties{
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProperties) {
  return (
    <div>CardProduto</div>
  )
}

export default CardProduto