const { sendToTelegram } = require('../services/telegram.service.js')
const { validateFormBody } = require('../utils/validateBody.js')
const { canSubmit } = require('../utils/ipRateLimiter')

module.exports = async function (app) {
    app.post('/form', async (request, reply) => {
        const ip = request.ip

        if (!canSubmit(ip)) {
            return reply.status(429).send({ error: 'Too many requests' })
        }

        const body = request.body

        const validation = validateFormBody(body)
        if (!validation.success) {
            return reply.status(400).send({ error: validation.error })
        }

        try {
            await sendToTelegram(validation.data)
            return { success: true }
        } catch (err) {
            request.log.error(err)
            return reply.status(500).send({ error: 'Error sending message' })
        }
    })
}
