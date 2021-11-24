// userController.js
// Import user model
var SiigoApi = require('siigo_api');
// Handle index actions
const environment = require("../config/environment");

exports.login = async function (req, res) {
  if (!req.body.username || !req.body.access_key)
    res.status(400).send("Error: Incomplete Data");
  try {

    SiigoApi.initialize(
      {
        basePath: "https://servicesqa.siigo.com/alliances/api/siigoapi",
        urlSignIn: "https://servicesqa.siigo.com/alliances/api/siigoapi-users/v1/sign-in",
        userName: req.body.username,
        accessKey: req.body.access_key,
      }
    );
    res.json({
      status: "success",
      data: { Authentification: "Authentified Successfully"}
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      message:  { 
        Authentification: "Authentified Failed",
        error: error
    }
    });
  }
};

exports.SiigoApi = SiigoApi