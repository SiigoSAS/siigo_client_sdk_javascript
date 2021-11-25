// invoiceController.js
// Import user model
var SiigoInstance = require('../controllers/auth.controller');

const authValidation = async (req, res, next) => {
  if(SiigoInstance.SiigoApi.ApiClient.instance != undefined)
    next();

  if (SiigoInstance.SiigoApi.ApiClient.instance == undefined)
    res.status(401).json({
      status: "Error",
      message: "You are not authenticated"
    })
}

module.exports = authValidation;