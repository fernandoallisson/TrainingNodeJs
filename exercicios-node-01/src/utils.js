const fs = require('fs');
const path = require('path');

const PATH_DATA_MOVIES = path.resolve(__dirname, './movies.json');

async function readData() {
  try {
    const data = await fs.promises.readFile(PATH_DATA_MOVIES);

  return JSON.parse(data);
  } catch (error) {
    console.error(`Do not read the file. Error: ${error}`);
  }
}

module.exports = {
  readData,
};
