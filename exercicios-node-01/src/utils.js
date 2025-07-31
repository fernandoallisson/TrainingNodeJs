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

async function getMoviesById(id) {
  try {
    const data = await readData();
    const movieFiltered = data.filter((movie) => movie.id === Number(id));

    if (movieFiltered.lenght < 1) { return { Message: 'Do not have movies here' }; }

    return movieFiltered; // Não vai 'parsear', por que já é um Array de Objetos. 
  } catch (error) {
    console.error(`Did not read the files. Error: ${error}`);
  }
}

module.exports = {
  readData,
  getMoviesById,
};
