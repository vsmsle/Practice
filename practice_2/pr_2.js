"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

const personaMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt("Ожин из последних просмотренных фильмов?"),
//   b = prompt("На сколько оцените его?"),
//   c = prompt("Ожин из последних просмотренных фильмов?"),
//   d = prompt("На сколько оцените его?");

// personaMovieDB.movies[a] = b;
// personaMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?"),
        b = prompt("На сколько оцените его?");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personaMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}

if (personaMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personaMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
    console.log('Произошла ошибка');
}

console.log(personaMovieDB);

//условия

if (4 == 4) {
  console.log("ok!");
} //верно

if (4 == 8) {
  console.log("ok!");
} else {
  console.log("Bad!");
} //верно

const num = 50;

if (num < 49) {
  console.log("error!");
} else if (num > 100) {
  console.log("много!");
} else {
  console.log("ok!");
}
