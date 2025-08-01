const express = require('express');
const ultils = require('../utils');
const apiCredentials = require('../middlewares/apiCredentials');
const validateId = require('../middlewares/validateId');

const router = express.Router(); 

router.get('/movies', async (req, res) => {
  const movies = await ultils.readData();

  return res.status(200).json({ movies });
});

router.use(apiCredentials); 

router.get('/movies/:id', validateId, async (req, res) => {
  const { id } = req.params;
  const movie = await ultils.getMoviesById(Number(id));

  return res.status(200).json(movie);
});

router.post('/movies', async (req, res) => {
  const newMovie = req.body;

  const movie = await ultils.postMovie(newMovie);
  
  return res.status(201).json({ movie });
});

router.put('/movies/:id', validateId, async (req, res) => {
  const { id } = req.params;
  const newMovie = req.body;

  const updatedMovie = await ultils.updateMovie(Number(id), newMovie);
  return res.status(200).json(updatedMovie);
});

router.delete('/movies/:id', validateId, async (req, res) => {
  const { id } = req.params;
  await ultils.deleMovie(id);
  res.status(200).json({ message: `Movie with id ${id} was deleted.` });
});

module.exports = router;