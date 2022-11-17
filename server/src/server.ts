import Fastify from "fastify";
import cors from "@fastify/cors";

import { productRoutes } from "./routes/products";


async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true,
  })

  await fastify.register(productRoutes)


  await fastify.listen({ port: 3333 })
}

bootstrap()
