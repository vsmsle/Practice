"use strict"

//логические операторы 

// const humburger = true;
// const fries =true;

// if (humburger && fries) {
//     console.log('Есть в наличии!');
// };

// console.log((humburger && fries));

const humburger = 3;
const fries = 1;
const cola = 0;

console.log(humburger == 3 && cola  && fries);

console.log(1 && 0); // 0 - всегда неправда
console.log(1 && 5);
console.log(null && 5);// null -неправда
console.log(0 && 'swrwrwrfw');

// оператор && возвращет всегда первое ложное значение, дальше код не идет, если все аргуметыверны то отдает последнее значение аргумента

if (humburger == 3 && cola === 1 && fries) {
    console.log('Есть в наличии!');
} else {
    console.log('мы уходим');
}




