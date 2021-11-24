// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "Siigo API Client Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});
// Import user controller
var AuthController = require("./controllers/auth.controller");
var InvoiceController = require('./controllers/invoice.controller')
// user routes
router.route("/auth").post(AuthController.login);
router.route("/invoice").post(InvoiceController.createInvoice);
// Export API routes
module.exports = router;
