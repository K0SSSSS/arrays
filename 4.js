// У вас є масив ["1-Pyton", "2-C++", "3-C#","4-PHP"]. В результаті вам потрібно отримати ["Pyton", "C++", "C#","PHP"]. Результат виведіть в консоль

let array = ["1-Python", "2-C++", "3-C#", "4-PHP"];

let newArray = array.map(item => item.split("-")[1]);

console.log(newArray);


