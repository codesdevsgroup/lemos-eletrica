import { FastifyInstance } from "fastify"

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/products', async () => {
    return {
      "ok": "demais"
    }
  })
}