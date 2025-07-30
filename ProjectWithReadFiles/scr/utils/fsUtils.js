const fs = require('fs').promises;
const path = require('path');

const OBJECT_DATA_PATH = path.resolve(__dirname, '../../data.JSON');

async function readFileData() {
  try {
    const data = await fs.readFile(OBJECT_DATA_PATH);
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro na leitura do arquivo: ${err.message}`);
  }
}

async function writeNewObject(newObject) {
  try {
    const oldObjects = await readFileData();
    const allObjectos = JSON.stringify([
      ...oldObjects,
      { id: Date.now(), ...newObject },
    ]);

    await fs.writeFile(OBJECT_DATA_PATH, allObjectos);
  } catch (err) {
    console.error(`Erro na escrita do arquivo: ${err.message}`);
  }
}

module.exports = {
  readFileData,
  writeNewObject,
};