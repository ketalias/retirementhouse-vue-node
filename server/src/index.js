const Fastify = require('fastify')
const dotenv = require('dotenv')
const formRoutes = require('./routes/form.route')

dotenv.config()

const app = Fastify({ logger: true })

app.register(formRoutes, { prefix: '/api' })

const start = async () => {
    try {
        await app.listen({ port: process.env.PORT, host: '0.0.0.0' })
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
