// productController.js
// Import user model
const SiigoInstance = require('./auth.controller')
// Handle index actions
const environment = require('../config/environment')

exports.getProduct = async (req, res) => {
  if (req.params.id == undefined) {
    try {
      const apiInstance = new SiigoInstance.SiigoApi.ProductApi()
      const opts = {
        code: req.body.code,
        accountGroup: req.body.accountGroup,
        type: req.body.type,
        stockControl: req.body.stockControl,
        active: req.body.active,
        ids: req.params.ids,
        createdStart: req.body.createdStart,
        createdEnd: req.body.createdEnd,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        updatedStart: req.body.updatedStart,
        updatedEnd: req.body.updatedEnd,
        page: req.body.page,
        pageSize: req.body.pageSize
      }

      const data = await apiInstance.getProducts(opts)
      res.status(200).json(data)
    } catch (error) {
      res.json({
        status: 'Error',
        message: 'Something was wrong',
        error: error
      })
    }
  } else {
    console.log(req.params.id)
    try {
      const apiInstance = new SiigoInstance.SiigoApi.ProductApi()
      const id = req.params.id

      const data = await apiInstance.getProduct(id)
      res.status(200).json(data)
    } catch (error) {
      res.json({
        status: 'Error',
        message: 'Something was wrong',
        error: error
      })
    }
  }
}

exports.createProduct = async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'createProduct works!'
  })
}

exports.updateProduct = async (req, res) => {
  console.log(req.params.id)
  res.status(200).json({
    status: 'success',
    message: 'updateProduct works!'
  })
}

exports.deleteProduct = async (req, res) => {
  console.log(req.params.id)
  res.status(200).json({
    status: 'success',
    message: 'deleteProduct works!'
  })
}
