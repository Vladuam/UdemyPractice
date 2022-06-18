'use strict';

// let i = 0;
// while (i < 2) {
//     const a = prompt('One of last watched films?', '');
//     const b = prompt('Please, mark this film','');
    
//     if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// do {
//     const a = prompt('One of last watched films?', '');
//     const b = prompt('Please, mark this film','');
    
//     if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of last watched films?', '');
        const b = prompt('Please, mark this film','');
        
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You watched a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You great film-lover');
    } else if (personalMovieDB.count >= 30) {
        console.log('You GOAT');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`,'');
    }
}

writeYourGenres();