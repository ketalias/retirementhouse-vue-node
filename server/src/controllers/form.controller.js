const { sendToTelegram } = require('../services/telegram.service')
const { validateFormBody } = require('../utils/validateBody')
const { canSubmit } = require('../utils/ipRateLimiter')

async function contactFormController(request, reply) {
    const ip = request.ip

    if (!canSubmit(ip)) {
        return reply.status(429).send({ error: 'Too many requests' })
    }

    const validation = validateFormBody(request.body)
    if (!validation.success) {
        return reply.status(400).send({ error: validation.error })
    }

    try {
        await sendToTelegram(validation.data, 'contact')
        return { success: true }
    } catch (err) {
        request.log.error(err)
        return reply.status(500).send({ error: 'Error sending message' })
    }
}

async function calculatorFormController(request, reply) {
    const ip = request.ip

    if (!canSubmit(ip)) {
        return reply.status(429).send({ error: 'Too many requests' })
    }

    const validation = validateFormBody(request.body)
    if (!validation.success) {
        return reply.status(400).send({ error: validation.error })
    }

    try {
        await sendToTelegram(validation.data, 'calculator')
        return { success: true }
    } catch (err) {
        request.log.error(err)
        return reply.status(500).send({ error: 'Error sending message' })
    }
}

module.exports = {
    contactFormController,
    calculatorFormController
}
