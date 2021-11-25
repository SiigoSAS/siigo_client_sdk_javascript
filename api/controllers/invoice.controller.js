// invoiceController.js
// Import user model
var SiigoInstance = require("./auth.controller");
// Handle index actions
const environment = require("../config/environment");

exports.createInvoice = async function (req, res) {
  let data = {};
  try {
    let apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
    let opts = {
      createInvoiceCommand: {
        document: {
          id: 115057
        },
        date: "2020-12-04",
        customer: {
          identification: "1636671963141",
          branch_office: "0"
        },
        seller: "18620",
        items: [
          {
            code: "1215",
            quantity: "1",
            price: 1000
          }
        ],
        payments: [
          {
            id: 34450,
            value: 1000
          }
        ]
      }
    };

    data = await apiInstance.createInvoice(opts);
    console.log(data);
    res.status(201).send({ data });
  } catch (error) {
    res.status(201).json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};

exports.getInvoice = async (req, res) => {}; //se puede usar este mismo endpoint para obtener varias o una por guid

exports.getInvoicePDF = async (req, res) => {};
