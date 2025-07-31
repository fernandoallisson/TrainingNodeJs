const fs = require('fs');
const path = require('path');
const getFile = require('./readData');

const DATA_PATH = path.resolve(__dirname, 
  '/home/fernando/Documentos/Node.js/soccer-team-manager/src/data/data.json');

async function updateData(id, updateTeamData) {
  const oldTeams = await getFile();
  const updatedSoccer = { id, ...updateTeamData };
  const updatedSoccerList = oldTeams.reduce((soccerList, currSoccer) => {
    if (currSoccer.id === updatedSoccer.id) return [...soccerList, updatedSoccer];
    return [...soccerList, currSoccer];
  }, []);
  
  const updateDataNew = JSON.stringify(updatedSoccerList);

  try {
    await fs.promises.writeFile(DATA_PATH, updateDataNew);
    console.log(`Atualizou o team com o id: ${id}`);
    return updateDataNew;
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
  }
}

module.exports = updateData;