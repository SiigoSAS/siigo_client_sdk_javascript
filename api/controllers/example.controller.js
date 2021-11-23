// userController.js
// Import user model
var SiigoApi = require('siigo_api');
// Handle index actions
const environment = require("../config/environment");

exports.index = async function (req, res) {

  SiigoApi.initialize({
    basePath: 'https://servicesqa.siigo.com/alliances/api/siigoapi', // https://services.siigo.com/alliances/api/siigoapi
    urlSignIn: 'https://servicesqa.siigo.com/alliances/api/siigoapi-users/v1/sign-in', // https://services.siigo.com/alliances/api/siigoapi-users/v1/sign-in
    userName: 'empresa@apiv1.com', // testname
    accessKey: 'YjFjYTI0MDQtMDEwYS00MDBkLWFkNmQtMWM1YWI3YjZiNGYzOjJUKHYlMFgjV1o=' // euy3423uykwjehqwuywj
  })
  try {
    let apiInstance = new SiigoApi.AccountGroupsApi();

    const data = await apiInstance.getAccountGroups();
    res.json({
      status: "success",
      data: data
    })
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error
    });
  }

};
// Handle create user actions
exports.new = function (req, res) {
  res.json({
    message: "New user created!",
    data: user
  });
};
// Handle view user info
exports.view = function (req, res) {
  res.json({
    message: "User details loading..",
    data: user
  });
};

