const express = require('express');
const getFile = require('./utils/readData');
const postFile = require('./utils/writeData');
const updateData = require('./utils/updateData');
const deleteData = require('./utils/deleteData');

const app = express();
app.use(express.json());

app.get('/soccer', async (req, res) => {
  const soccerManager = await getFile();

  return res.status(200).json({ soccerManager });
});

app.post('/soccer', async (req, res) => {
  const newTeam = req.body;

  const newTeamWithId = await postFile(newTeam);

   return res.status(201).json({ newTeamWithId });
});

app.put('/soccer/:id', async (req, res) => {
  const { id } = req.params;
  const updateSoccerData = req.body;

  const updateSoccer = await updateData(Number(id), updateSoccerData);
  
  return res.status(201).json({ updateSoccer });
});

app.delete('/soccer/:id', async (req, res) => {
  const { id } = req.params; 

  await deleteData(Number(id));

  return (res.status(204).end());
});
module.exports = app;
