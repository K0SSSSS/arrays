// Напишіть програму, яка використовує for of, щоб пройтися по масиву чисел [5,12,33,2,17,28] і обчислити їх загальну суму.

const values = [5, 12, 33, 2, 17, 28];
let sum = 0
for (let i = 0; i < values.length; i+=1){
    sum += values[i]
}
console.log(sum);
