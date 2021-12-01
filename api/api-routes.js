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
// Import Middlewares
var authValidation = require('./middlewares/authValidation');
// Import user controller
var AuthController = require("./controllers/auth.controller");
var InvoiceController = require('./controllers/invoice.controller');
var DocumentTypeController = require('./controllers/documentType.controller');
var CustomerController = require('./controllers/customer.controller');
var ProductController = require('./controllers/product.controller');
var PaymentTypesController = require('./controllers/paymentTypes.controller');
var UsersController = require('./controllers/users.controller');
var TaxController = require('./controllers/tax.controller');
// user routes
router.route("/auth").post(AuthController.login);
router
  .post("/invoice",authValidation, InvoiceController.createInvoice)
  .get("/invoice/:id?", authValidation, InvoiceController.getInvoice)
  .get("/invoice/:id?/PDF" ,authValidation, InvoiceController.getInvoicePDF)
  .get("/invoice/:id?/errors" ,authValidation, InvoiceController.getElectronicInvoiceErrors)
router.route("/documentType/:type").get(authValidation, DocumentTypeController.getDocumentTypes);
router.route('/customer/:id?')
  .post(authValidation, CustomerController.createCustomer)
  .get(authValidation, CustomerController.getCustomer)
  .put(authValidation, CustomerController.updateCustomer)
  .delete(authValidation, CustomerController.deleteCustomer);
router.route('/product/:id?')
  .post(authValidation, ProductController.createProduct)
  .get(authValidation,  ProductController.getProduct)
  .put(authValidation, ProductController.updateProduct)
  .delete(authValidation, ProductController.deleteProduct);
router.route('/paymentTypes/:type').get(authValidation, PaymentTypesController.getPaymentTypes);
router.route('/users').get(authValidation, UsersController.getUsers);
router.route('/taxes').get(authValidation, TaxController.getTaxes);
// Export API routes
module.exports = router; 
