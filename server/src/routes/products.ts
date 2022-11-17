import { FastifyInstance } from "fastify"

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/pools/count', async () => {
    return {
      "ok": "demais"
    }
  })
}