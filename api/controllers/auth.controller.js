const SiigoApi = require('siigo_api')
const environment = require('../config/environment')

exports.login = async function (req, res) {
  if (!req.body.username || !req.body.access_key) { res.status(400).send('Error: Incomplete Data') }

  if (!environment.path.api || !environment.path.sign) { res.status(400).send('Error: Configure Environment') }

  SiigoApi.initialize({
    basePath: environment.path.api,
    urlSignIn: environment.path.sign
  })
  try {
    await SiigoApi.signIn({
      userName: req.body.username,
      accessKey: req.body.access_key
    })
    res.status(200).json({
      status: 'success',
      data: { Authentication: 'Authentication Successfully' }
    })
  } catch (error) {
    res.status(401).json({
      status: 'error',
      message: {
        Authentication: 'Authentication failed',
        error: "Invalid username or access_key"
      }
    })
  }
}

exports.SiigoApi = SiigoApi
