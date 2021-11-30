// taxController.js
// Import user model
var SiigoInstance = require("./auth.controller");
// Handle index actions
const environment = require("../config/environment");

exports.getTaxes = async (req, res) => {
  try {
    let apiInstance = new SiigoInstance.SiigoApi.TaxesApi();

    const data = await apiInstance.getTaxes();
    res.status(200).json(data);
  } catch (error) {
    res.json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
}