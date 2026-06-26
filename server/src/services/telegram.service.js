function escapeHtml(text) {
    if (!text) return text
    return text.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

function translateFormValue(key, value) {
    const translations = {
        gender: {
            'male': 'Чоловіча',
            'female': ': Жіноча'
        },
        mobility: {
            'yes': 'Так',
            'no': 'Ні',
            'with_help': 'З допомогою'
        },
        mentalHealth: {
            'low': 'Низька',
            'medium': 'Середня',
            'high': 'Висока'
        }
    }

    return translations[key] && translations[key][value] ? translations[key][value] : value
}

function buildContactMessage(data) {
    const name = escapeHtml(data.name)
    const phone = escapeHtml(data.phone)
    const message = escapeHtml(data.message)

    return `
<b>📞 Нова контактна заявка</b>

<b>Ім’я:</b> ${name}
<b>Телефон:</b> ${phone}
<b>Повідомлення:</b> ${message}
`.trim()
}

function buildCalculatorMessage(data) {
    const age = escapeHtml(data.age)
    const gender = escapeHtml(translateFormValue('gender', data.gender))
    const mobility = escapeHtml(translateFormValue('mobility', data.mobility))
    const mentalHealth = escapeHtml(translateFormValue('mentalHealth', data.mentalHealth))
    const roomCapacity = escapeHtml(data.roomCapacity)
    const phone = escapeHtml(data.phone)

    return `
<b>🏠 Нова заявка з калькулятора</b>

<b>Вік:</b> ${age}
<b>Стать:</b> ${gender}
<b>Може пересуватись:</b> ${mobility}
<b>Психічний стан:</b> ${mentalHealth}
<b>Кількість місць у кімнаті:</b> ${roomCapacity}
<b>Телефон:</b> ${phone}
`.trim()
}


async function sendToTelegram(data, type = 'contact') {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatIdsString = process.env.TELEGRAM_CHAT_IDS;

    if (!chatIdsString) {
        console.error("TELEGRAM_CHAT_IDS is not set in environment variables.");
        throw new Error("TELEGRAM_CHAT_IDS is required.");
    }

    const chatIds = chatIdsString.split(',').map(id => id.trim()).filter(id => id.length > 0);

    let message = '';
    if (type === 'calculator') {
        message = buildCalculatorMessage(data);
    } else if (type === 'contact') {
        message = buildContactMessage(data);
    } else {
        throw new Error(`Unknown form type: ${type}`);
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const results = [];
    const TELEGRAM_TIMEOUT_MS = 10 * 1000;

    for (const chatId of chatIds) {
        console.log(`Sending message to Telegram chatId: ${chatId}`);

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML'
                }),
                signal: controller.signal
            });

            if (!response.ok) {
                const errText = await response.text();
                console.error(`Telegram API error for chat ${chatId}:`, errText);
                results.push({ chatId, success: false, error: errText });
            } else {
                const result = await response.json();
                console.log(`Message sent successfully to ${chatId}`);
                results.push({ chatId, success: true, result });
            }
        } catch (error) {
            const errMessage = error.name === 'AbortError' ? 'Telegram request timed out' : error.message;
            console.error(`Error sending to Telegram chat ${chatId}:`, errMessage);
            results.push({ chatId, success: false, error: errMessage });
        } finally {
            clearTimeout(timeout);
        }
    }

    return results;
}

module.exports = { sendToTelegram }