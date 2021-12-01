// paymentTypesController.js
// Import user model
const SiigoInstance = require('./auth.controller')
// Handle index actions
const environment = require('../config/environment')
exports.getPaymentTypes = async (req, res) => {
  try {
    const apiInstance = new SiigoInstance.SiigoApi.PaymentTypesApi()
    const opts = {
      documentType: req.params.type
    }

    const data = await apiInstance.getPaymentTypes(opts)
    res.status(200).json(data)
  } catch (error) {
    res.json({
      status: 'Error',
      message: 'Something was wrong',
      error: error
    })
  }
}
