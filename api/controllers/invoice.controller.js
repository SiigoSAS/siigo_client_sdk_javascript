// invoiceController.js
// Import user model
const SiigoInstance = require("./auth.controller");
// Handle index actions
const environment = require("../config/environment");

exports.createInvoice = async function (req, res) {
  const opts = {
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
  };

  try {
    const apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();

    const data = await apiInstance.createInvoice(opts);
    res.status(201).json(data);
  } catch (error) {
    res.json({
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};

exports.getInvoice = async (req, res) => {
  if (req.params.id == undefined) {
    try {
      const apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
      const opts = {
        documentId: req.body.documentId,
        customerIdentification: req.body.customerIdentification,
        customerBranchOffice: req.body.customerBranchOffice,
        name: req.body.name,
        createdStart: req.body.createdStart,
        createdEnd: req.body.createdEnd,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        updatedStart: req.body.updatedStart,
        updatedEnd: req.body.updatedEnd,
        page: req.body.page || 1,
        pageSize: req.body.pageSize || 25
      };

      const data = await apiInstance.getInvoices(opts);
      res.status(200).json(data);
    } catch (error) {
      res.json({
        status: "Error",
        message: "Something was wrong",
        error: error
      });
    }
  } else {
    try {
      const apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
      const id = req.params.id;

      const data = await apiInstance.getInvoice(id);
      res.status(200).json(data);
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
    const apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
    const id = req.params.id;
    const data = await apiInstance.getInvoicePDF(id);
    res.status(200).json(data);
  } catch (error) {
    res.json({
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};

exports.getElectronicInvoiceErrors = async (req, res) => {
  try {
    const apiInstance = new SiigoInstance.SiigoApi.InvoiceApi();
    const id = req.params.id;
    const data = await apiInstance.getElectronicInvoiceErrors(id);
    res.status(200).json(data);
  } catch (error) {
    res.json({
      status: "Error",
      message: "Something was wrong",
      error: error
    });
  }
};
