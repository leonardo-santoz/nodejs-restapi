import fastify from 'fastify'
import crypto from 'node:crypto'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionRoutes)

app.listen({ port: env.PORT }).then(() => {
  console.log('app is running')
})
