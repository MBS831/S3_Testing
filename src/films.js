// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(name => name.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let peliculas = movies.filter(movie => movie.director === director)
  console.log(peliculas);
  return peliculas;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  const directorMovies = movies.filter(movie => movie.director === director);
  const totalScore = directorMovies.reduce((total, movie) => total + movie.score, 0);
  const average = totalScore / directorMovies.length;

  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {

  const newMovies = [...movies];
  // ordenar per títol
  const sortedMovies = newMovies.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  // tornar nomes string dels títols
  const titles = sortedMovies.map(movie => movie.title);
  return titles.slice(0, 20);

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const nouArray = [...movies];
  //Mateix títol, ordenades alfabeticament
  nouArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); 
    }
    return a.year - b.year; // ordenar per any
  });
  return nouArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  
  const moviesInMinutes = movies.map(movie => ({
    ...movie,
    duration: movie.duration * 60, // Convertir hores a minuts
  }));

  return moviesInMinutes;
}



// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const movieYear = [movies.filter(movie => movie.year === year).sort((a, b) => b.score - a.score)[0]];

  console.log(movieYear);
  return movieYear;
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
