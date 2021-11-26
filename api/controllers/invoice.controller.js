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
          id: req.body.document.id
        },
        date: req.body.date,
        customer: {
          identification: req.body.customer.identification,
          branch_office: req.body.customer.branch_office
        },
        seller: req.body.seller,
        items: req.body.items,
        payments: req.body.payments
      }
    };

    data = await apiInstance.createInvoice(opts);
    res.status(201).json( data );
  } catch (error) {
    res.json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};

exports.getInvoice = async (req, res) => {
  if(req.params.id == undefined) {
    try {
      let apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
      let opts = {
        'documentId': req.body.documentId,
        'customerIdentification': req.body.customerIdentification,
        'customerBranchOffice': req.body.customerBranchOffice,
        'name': req.body.name,
        'createdStart': req.body.createdStart,
        'createdEnd': req.body.createdEnd,
        'dateStart': req.body.dateStart,
        'dateEnd': req.body.dateEnd,
        'updatedStart': req.body.updatedStart,
        'updatedEnd': req.body.updatedEnd,
        'page': req.body.page,
        'pageSize': req.body.pageSize,
      };
  
      const data = await apiInstance.getInvoices(opts);
      res.status(200).json( data );
    } catch (error) {
      res.json({ 
        status: "Error",
        message: "Something was wrong",
        error: error
      });
    }
  } else {
    try {
      let apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
      let id = req.params.id;
  
      const data = await apiInstance.getInvoice(id);
      res.status(200).json( data );
    } catch (error) {
      res.json({ 
        status: "Error",
        message: "Something was wrong",
        error: error
      });
    }
  }
};

exports.getInvoicePDF = async (req, res) => {
  try {
    let apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
    let id = req.params.id;
    console.log(id);
    const data = await apiInstance.getInvoicePDF(id);
    res.status(200).json( data );
  } catch (error) {
    res.json({ 
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};
