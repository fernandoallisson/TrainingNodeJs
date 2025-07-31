const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.resolve(__dirname, 
  '/home/fernando/Documentos/Node.js/soccer-team-manager/src/data/data.json');

async function getFile() {
  try {
    const data = await fs.readFile(DATA_PATH);
     return JSON.parse(data);
  } catch (err) {
    console.error(`O sistema não conseguiu ler o arquivo: ${path}`);
  }
}

module.exports = getFile;