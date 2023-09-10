// Напиши скрипт, який рахує суму елементів двох масивів. Для реалізації використовуй методи з матеріалів лекції

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const allArrays = array1.concat(array2);
console.log(allArrays);
let sum = 0
for (let i = 0; i < allArrays.length; i+=1){
    sum += allArrays[i]
}
console.log(sum);