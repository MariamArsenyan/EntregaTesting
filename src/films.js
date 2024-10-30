
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movies => movies.director);
  console.log("EXERCISE 1 ->", result);
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCISE 2 ->", result);
  return result;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter(movie => movie.director === director);
  const averageScore = directorMovies.reduce((acc, movie) => acc + movie.score, 0) / directorMovies.length;
  const result = parseFloat(averageScore.toFixed(2));
  console.log("EXERCISE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let sortedTitles = array
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  console.log("EXERCISE 4 ->", sortedTitles);
  return sortedTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedByYear = [...(array)].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  console.log("EXERCISE 5 ->", sortedByYear);
  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genreMovies = array.filter(movie => movie.genre.includes(genre) && movie.score !== undefined);
  const averageScore = genreMovies.reduce((acc, movie) => acc + movie.score, 0) / genreMovies.length;
  const result = parseFloat(averageScore.toFixed(2));
  return result;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const convertDuration = duration => {
    let hours = 0, minutes = 0;
    const hoursMatch = duration.match(/(\d+)h/);
    const minutesMatch = duration.match(/(\d+)min/);
    if (hoursMatch) hours = parseInt(hoursMatch[1]) * 60;
    if (minutesMatch) minutes = parseInt(minutesMatch[1]);
    return hours + minutes;
  };
  
  const result = array.map(movie => ({
    ...movie,
    duration: convertDuration(movie.duration)
  }));
  console.log("EXERCISE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesOfYear = array.filter(movie => movie.year === year);
  const bestMovie = moviesOfYear.reduce((best, movie) => (movie.score > best.score ? movie : best), moviesOfYear[0]);
  console.log("EXERCISE 8 ->", bestMovie ? [bestMovie] : []);
  return bestMovie ? [bestMovie] : [];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
    