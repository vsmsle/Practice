"use strict"

const modal = prompt('ты тут?');
console.log(typeof(modal));


const answers = [];
answers[0] = prompt('имя?', '');
answers[1] = prompt('фамилия?', '');
answers[2] = prompt('отчество?', '');

// document.write(answers);
console.log(answers);

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

console.log(2*4 == 8); //сравнение не строгое 
console.log(2*4 == '8'); //сравнение не строгое
console.log(2*4 === 8); //строгое сравнение (тут на примере сравнения типа данных)
console.log(2*4 === '8'); //false


//&& - и
// || - или

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose); //false 

const isChecked1 = true,
      isClose1 = false;

console.log(isChecked1 || isClose1);//true 

//  ! - оператро отрицания

console.log(2 + 2 * 2 === '6');//false
console.log(2 + 2 * 2 == '6');//true
console.log(2 + 2 * 2 === 6);//true
console.log(2 + 2 * 2 != 8);//true
console.log(2 + 2 * 2 !== 6);//false
console.log(2 + 2 * 2 !== '6');//true
console.log(2 + 2 * 2 != '8');//true
