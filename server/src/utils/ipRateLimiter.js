const rateLimitMap = new Map();

const RATE_LIMIT_COUNT = 1;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

const CLEANUP_INTERVAL_MS = 6 * 60 * 60 * 1000;

function canSubmit(ip) {
    const now = Date.now();
    let timestamps = rateLimitMap.get(ip) || [];

    timestamps = timestamps.filter(timestamp => timestamp > now - RATE_LIMIT_WINDOW_MS);

    if (timestamps.length >= RATE_LIMIT_COUNT) {
        rateLimitMap.set(ip, timestamps);
        return false;
    }

    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);
    return true;
}

function startCleanup() {
    setInterval(() => {
        rateLimitMap.forEach((timestamps, ip) => {
            if (timestamps.length === 0) {
                rateLimitMap.delete(ip);
            }
        });
    }, CLEANUP_INTERVAL_MS);
}


module.exports = {
    canSubmit,
    startCleanup
};