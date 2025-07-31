const express = require('express');
const getFile = require('./utils/readData');
const postFile = require('./utils/writeData');
const updateData = require('./utils/updateData');

const app = express();
app.use(express.json());

app.get('/soccer', async (req, res) => {
  const soccerManager = await getFile();

  return res.status(200).json({ soccerManager });
});

app.post('/soccer', async (req, res) => {
  const newTeam = req.body;

  const newTeamWithId = await postFile(newTeam);

  console.log(postFile);

   return res.status(201).json({ newTeamWithId });
});

app.put('/soccer/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const updateSoccerData = req.body;

  const updateSoccer = await updateData(Number(id), updateSoccerData);
  
  return res.status(201).json({ updateSoccer });
});
module.exports = app;
