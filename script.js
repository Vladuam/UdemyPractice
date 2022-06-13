'use strict';

const numberOfFilms = +prompt('How many films you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstFilmName = prompt('One of last watched films?', '');
const firstFilmMark = prompt('Please, mark this film', '1.0 to 10.0');
const secondFilmName = prompt('One of last watched films?', '');
const secondFilmMark = prompt('Please, mark this film', '1.0 to 10.0');

personalMovieDB.movies[firstFilmName] = firstFilmMark;
personalMovieDB.movies[secondFilmName] = secondFilmMark;

console.log(personalMovieDB);