// Напишіть скрипт, який приймає масив чисел [23,1,45,87,4,55,6], використовуючи for of для пошуку найбільшого числа в масиві.

const values = [23,1,45,87,4,55,6];
let highest = 0
for (const value of values){
    if(value > highest){
    highest = value;
    }
}
console.log(highest);