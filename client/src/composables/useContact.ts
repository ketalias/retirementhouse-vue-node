export function useContact(phoneNumber = '+380952435358') {
  function handleCall() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent)
    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`
    } else {
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => alert(`Номер ${phoneNumber} скопійовано в буфер обміну`))
        .catch(() => alert(`Скопіюйте номер вручну: ${phoneNumber}`))
    }
  }
  return { handleCall }
}
