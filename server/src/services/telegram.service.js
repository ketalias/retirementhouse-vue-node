async function sendToTelegram(data) {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    const message = `
*Нова заявка з форми*

*Вік:* ${data.age}  
*Стать:* ${data.gender}  
*Може пересуватись?:* ${data.mobility}  
*Ступінь психічних захворювань:* ${data.mentalHealth}  
*Місць у кімнаті:* ${data.roomPlaces}  
*Телефон:* ${data.phone}
`.trim()


    const url = `https://api.telegram.org/bot${token}/sendMessage`
    console.log(url)

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        })
    })

    if (!response.ok) {
        const errText = await response.text()
        throw new Error(`Telegram API error: ${errText}`)
    }
}

module.exports = { sendToTelegram }
