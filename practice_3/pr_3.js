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

console.log( NaN || 2 || undefined );

console.log( NaN && 2 && undefined );

console.log( 1 && 2 && 3 );

console.log( !1 && 2 || !3 );

console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);

console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);



const hamburger4 = 3;
const fries4 = 3;
const cola4 = 0;
const nuggets4 = 2;


if (hamburger4 === 3 && cola4 || fries4 === 3 && nuggets4) {
   console.log('Done!')
} //done


let hamburger5;
const fries5 = NaN;
const cola5 = 0;
const nuggets5 = 2;


if (hamburger5 || cola5 || fries5 === 3 || nuggets5) {
   console.log('Done!')
} //done


let hamburger6;
const fries6 = NaN;
const cola6 = 0;
const nuggets6 = 2;


if (hamburger6 && cola6 || fries6 === 3 && nuggets6) {
   console.log('Done!')
}
