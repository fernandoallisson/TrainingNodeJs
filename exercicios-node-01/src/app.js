const express = require('express');
const ultils = require('./utils');

const app = express();
app.use(express.json());

app.get('/movies', async (req, res) => {
  const data = await ultils.readData();

  return res.status(200).json(data);
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await ultils.getMoviesById(Number(id));

  return res.status(200).json(movie);
});

module.exports = app;