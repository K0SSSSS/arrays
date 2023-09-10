// Напишіть скрипт, який перевіряє наявність в масиві ["Pyton", "C++", "C#", "PHP"] значення "Java Script". Якщо в масиві такого значення немає вивести в консоль "Значення Java Script в списку немає, додаємо в масив". Після чого додати "Java Script" в кінець масиву.

const array = ["Pyton", "C++", "C#", "PHP"];
if (array.includes("Java Script")){
    console.log("Java Script є в масиві");
}
else{
    console.log("Значення Java Script в списку немає, додаємо в масив");
}
array.push("Java Script")
console.log(array);