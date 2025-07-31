const fs = require('fs');
const path = require('path');
const getFile = require('./readData');

const DATA_PATH = path.resolve(__dirname, 
  '/home/fernando/Documentos/Node.js/soccer-team-manager/src/data/data.json');

async function deleteData(id) {
  const oldSoccers = await getFile();

  const updatedSoccer = oldSoccers.filter((currSoccer) => currSoccer.id !== id);
  const updateData = JSON.stringify(updatedSoccer);

  try {
    await fs.promises.writeFile(DATA_PATH, updateData);
    console.log(`Deletou o team com o id: ${id}`);
  } catch (error) {
    console.error(`Erro na exclusão do arquivo: ${error}`);
  }
}

module.exports = deleteData;