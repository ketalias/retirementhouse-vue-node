const { contactFormController, calculatorFormController } = require('../controllers/form.controller')

module.exports = async function (app) {
    app.post('/form/contact', contactFormController)
    app.post('/form/calculator', calculatorFormController)
}
