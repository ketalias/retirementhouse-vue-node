function validateFormBody(body) {
    if (!body.phone) {
        return { success: false, error: 'Missing field: phone' }
    }

    return { success: true, data: body }
}

module.exports = { validateFormBody }