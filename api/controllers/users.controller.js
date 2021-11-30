// usersController.js
// Import user model
var SiigoInstance = require("./auth.controller");
// Handle index actions
const environment = require("../config/environment");

exports.getUsers = async (req, res) => {
  try {
    let apiInstance = new SiigoInstance.SiigoApi.UsersApi();
    let opts = {
      'page': req.body.page, 
      'pageSize': req.body.pageSize
    };

    const data = await apiInstance.getUsers(opts);
    res.status(200).json( data );
  } catch (error) {
    res.json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
}