"use strict"


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Ожин из последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Ожин из последних просмотренных фильмов?'),
      d = prompt('На сколько оцените его?');


personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;

console.log(personaMovieDB);


//условия

if (4 == 4) {
    console.log('ok!')
}; //верно

if (4 == 8) {
    console.log('ok!');
} else {
    console.log('Bad!');
}; //верно

const num = 50;

if (num < 49) {
    console.log('error!');
} else if (num > 100) {
    console.log('много!')
} else {
    console.log('ok!')
}