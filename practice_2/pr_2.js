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
