const fs = require('fs');
const path = require('path');
const getFile = require('./readData');

const DATA_PATH = path.resolve(__dirname, 
  '/home/fernando/Documentos/Node.js/soccer-team-manager/src/data/data.json');

async function postData(newTeam) {
  try {
    const oldData = await getFile();
    const newTeamWithId = { id: Date.now(), ...newTeam };
    const allData = JSON.stringify([...oldData, newTeamWithId]);

    fs.promises.writeFile(DATA_PATH, allData); 

    return newTeamWithId; 
  } catch (error) {
    console.error(`O sistema não conseguiu escrever no arquivo: ${DATA_PATH}`);
    console.error(error);
  }
}

module.exports = postData;