const express = require('express');
const ultils = require('./utils');

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  const data = await ultils.readData();

  res.status(200).json(data);
});

module.exports = app;