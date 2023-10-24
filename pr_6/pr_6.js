"use strict";

//функции и аргументы

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}
// amount, curr -фргумент функции

// convert(500, usdCurr);
// convert(500, eurCurr);

// 1. В функцию мы передаем 2 аргумента. Не важно, как из назвать.

// 2. Когда мы вызываем функцию, на место этих аргументов подставляются значения, т.е технически это называется неявное присваивание.

// 3. Когда мы вызываем функцию, мы в круглые скобки передаем аргументы для параметров. Т.е первым у нас идет при вызове функции аргумент 500. Вот он как раз подставляется вместо amount. Внутри движок присваивает в amount = 500

// И такая операция выполняется в порядке очередности)

//!!RETERN!!

function promotion(result) {
  console.log(result * discount);
}
// const res = convert(500, usdCurr);
// promotion(res); - равнозначно с нижней строчкой

promotion(convert(500, usdCurr));
// convert(500, usdCurr);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3);
  }
  console.log("Done");
}

test();


function doNothing() {};
console.log(doNothing() === undefined);
//пример того, что функция всегда что-то возвращает 