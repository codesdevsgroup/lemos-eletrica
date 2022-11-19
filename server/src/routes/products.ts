import { FastifyInstance } from "fastify"
import { Produto } from "../database/db";

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/products', async () => {
    const produtos = await Produto.findAll({
      attributes: ['PRODUTOS_ID', 'PRODUTO_NOME', 'PRODUTO_PRECO_VENDA']
    });

    return produtos
  })
}