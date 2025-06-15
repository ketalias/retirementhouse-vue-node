const rateLimitMap = new Map()

function canSubmit(ip) {
    const today = new Date().toISOString().slice(0, 10) 

    const record = rateLimitMap.get(ip)
    if (record === today) {
        return false
    }

    rateLimitMap.set(ip, today)
    return true
}

module.exports = { canSubmit }