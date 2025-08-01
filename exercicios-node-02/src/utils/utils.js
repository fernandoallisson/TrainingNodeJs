const fs = require('fs');
const path = require('path');

const PATH_DATABASE = path.resolve(__dirname, '../../database.json');

async function getAllData() {
  const data = await fs.promises.readFile(PATH_DATABASE);

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error(`Do not possible to get the file. Error: ${error}`);
  }
}

async function postData(data) {
  const oldData = await getAllData();
  const newData = JSON.stringify(data);
  const allData = [...oldData, ...newData];

  try {
    await fs.promises.writeFile(PATH_DATABASE, JSON.parse(allData));
    return { message: 'Atividade cadastrada com sucesso!' };
  } catch (error) {
    console.error(`Did not write in the file. Error: ${error}`);
  }
}

module.exports = {
  getAllData, 
  postData,
};
