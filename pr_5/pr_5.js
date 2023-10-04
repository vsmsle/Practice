"use strict"

//функции, стрелочные функции

// function showFirstMassage() {
//     console.log("Hello World!");
// }

// showFirstMassage();

//или

function showFirstMassage(text) {
    console.log(text);
}

showFirstMassage("hello World!");


let num = 20; //глобальная переменная

function showFirstMassage(text) {  //texc - аргумент
    console.log(text);
    num = 20; //использование глоб переменной в функции
}

showFirstMassage("hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 5));