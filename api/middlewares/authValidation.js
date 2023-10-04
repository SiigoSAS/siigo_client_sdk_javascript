// invoiceController.js
// Import user model
const SiigoInstance = require('../controllers/auth.controller')

const authValidation = async (req, res, next) => {
  if (SiigoInstance.SiigoApi.ApiClient != undefined && SiigoInstance.SiigoApi.ApiClient.instance != undefined) { next() }

  if (SiigoInstance.SiigoApi.ApiClient.instance == undefined) {
    res.status(401).json({
      status: 'Error',
      message: 'You are not authenticated'
    })
  }
}

module.exports = authValidation
