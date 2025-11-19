const Fastify = require('fastify')
const dotenv = require('dotenv')
const formRoutes = require('./routes/form.routes')
const { startCleanup } = require('./utils/ipRateLimiter');

startCleanup();
console.log('Rate Limiter Cleanup started.');

dotenv.config()

const app = Fastify({ logger: true })

app.register(require('@fastify/cors'), {
    origin: process.env.NODE_ENV === 'production'
        ? ['https://yourdomain.com', 'https://www.yourdomain.com']
        : true,

    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],

    credentials: true,

    maxAge: 86400
})

app.register(formRoutes, { prefix: '/api' })

app.register(formRoutes)

const start = async () => {
    try {
        await app.listen({
            port: process.env.PORT || 3000,
            host: '0.0.0.0'
        })
        console.log(`Server running on port ${process.env.PORT || 3000}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()