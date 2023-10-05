const SiigoApi = require('siigo_api');
const environment = require('../config/environment')

exports.login = async function (req, res) {
  if (!req.body.username || !req.body.access_key) { res.status(401).send('Error: Incomplete Data') }

  if (!environment.path.api || !environment.path.sign) { res.status(401).send('Error: Configure Environment') }

  if(!environment.validUserNames) { res.status(401).send('Error: Configure Environment, there is not valid usernames') }
  
  //* Validate if the user names is available to login
  let validUserNames = process.env.VALID_USER_NAME.split(',')
  if(!validUserNames.includes(req.body.username)){
    return res.status(401).json({
      status: 'error',
      message: {
        Authentication: 'Authentication failed',
        error: "this user is not allowed to login"
      }
    });
  }

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
