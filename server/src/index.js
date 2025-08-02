const Fastify = require('fastify')
const dotenv = require('dotenv')
const formRoutes = require('./routes/form.routes')

dotenv.config()

const app = Fastify({ logger: true })

// Register CORS plugin
app.register(require('@fastify/cors'), {
    // Allow all origins in development
    origin: process.env.NODE_ENV === 'production'
        ? ['https://yourdomain.com', 'https://www.yourdomain.com'] // Replace with your production URLs
        : true, // Allow all origins in development

    // Allow specific HTTP methods
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],

    // Allow specific headers
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],

    // Allow credentials (cookies, authorization headers)
    credentials: true,

    // Preflight request cache time (in seconds)
    maxAge: 86400 // 24 hours
})

// Register your routes
app.register(formRoutes, { prefix: '/api' })

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