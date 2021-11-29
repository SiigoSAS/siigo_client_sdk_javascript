// documentTypeController.js
// Import user model
var SiigoInstance = require('./auth.controller');
// Handle index actions
const environment = require("../config/environment");

exports.getDocumentTypes = async (req, res) => {
  try {
    let apiInstance = new SiigoInstance.SiigoApi.DocumentTypeApi();
    let opts = {
    'type': req.params.type
    };
    const data = await apiInstance.getDocumentTypes(opts);
    res.status(200).json( data );
  } catch (error) {
    res.json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
}