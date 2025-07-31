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
  const data = await readData();

  try {
    const movieFiltered = data.filter((movie) => movie.id === Number(id));
    if (movieFiltered.lenght < 1) { return { Message: 'Do not have movies here' }; }

    return movieFiltered; // Não vai 'parsear', por que já é um Array de Objetos. 
  } catch (error) {
    console.error(`Did not read the files. Error: ${error}`);
  }
}

async function postMovie(newMovie) {
  const oldListMovies = await readData();
  try {
    const newMovieWithId = { id: Date.now(), ...newMovie };

    const allMovies = JSON.stringify([...oldListMovies, newMovieWithId]);

    await fs.promises.writeFile(PATH_DATA_MOVIES, allMovies);

    return newMovieWithId;
  } catch (error) {
    console.error(`Did not post the movie in the database. Error: ${error}`);
  }
}

async function updateMovie(id, newMovie) {
  const oldMovieList = await readData();
  try {
      const updatedMovie = oldMovieList.map((movie) => (movie.id === id
    ? { ...movie, ...newMovie }
    : movie));

    await fs.promises.writeFile(PATH_DATA_MOVIES, JSON.stringify(updatedMovie));

    return updatedMovie.find((movie) => movie.id === Number(id));
  } catch (error) {
    console.error(`Did Not Update the Movie with id: ${id}. Error: ${error}`);
  }
}

async function deleMovie(id) {
  try {
    const oldListMovies = await readData();
    const filteredMovie = oldListMovies.filter((movie) => movie.id !== Number(id));

    await fs.promises.writeFile(PATH_DATA_MOVIES, JSON.stringify(filteredMovie));
  } catch (error) {
    console.error(`Do not possible to delete the Movie. Error ${error}`);
  }
}

module.exports = {
  readData,
  getMoviesById,
  postMovie,
  updateMovie,
  deleMovie,
};
