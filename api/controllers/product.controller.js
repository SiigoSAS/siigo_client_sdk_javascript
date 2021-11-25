// productController.js
// Import user model
var SiigoInstance = require('./auth.controller');
// Handle index actions
const environment = require("../config/environment");

exports.getProduct = async (req, res) => {
  if(req.params.id == undefined) {
    res.status(200).json({
      status: "success",
      message: "getProducts works!"
    });
  } else {
    console.log(req.params.id);
    res.status(200).json({
      status: "success",
      message: "getProduct works!"
    });    
  }
};

exports.createProduct = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "createProduct works!"
  });
};

exports.updateProduct = async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    message: "updateProduct works!"
  });
};

exports.deleteProduct = async (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    message: "deleteProduct works!"
  });
}