const fs = require('fs');
const path = require('path');

const PATH_DATA = path.resolve(__dirname, '../../autData.json');

async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');

  const authData = await fs.promises.readFile(PATH_DATA, { encoding: 'utf-8' });
  
  const authorized = JSON.parse(authData);

  if (token in authorized) {
    next();
  } else { 
    res.sendStatus(401).end();
  }
}

module.exports = apiCredentials;