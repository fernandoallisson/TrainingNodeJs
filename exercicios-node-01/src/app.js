const express = require('express');
const ultils = require('./utils');

const app = express();
app.use(express.json());

app.get('/movies', async (req, res) => {
  const movies = await ultils.readData();

  return res.status(200).json({ movies });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = await ultils.getMoviesById(Number(id));

  return res.status(200).json(movie);
});

app.post('/movies', async (req, res) => {
  const newMovie = req.body;

  const movie = await ultils.postMovie(newMovie);
  
  return res.status(201).json({ movie });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const newMovie = req.body;

  const updatedMovie = await ultils.updateMovie(Number(id), newMovie);
  return res.status(200).json(updatedMovie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  await ultils.deleMovie(id);
  res.status(200).json({ message: `Movie with id ${id} was deleted.` });
});

module.exports = app;