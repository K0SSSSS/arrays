// Створіть програму, яка запитує у користувача його настрій за допомогою prompt(), а потім в залежності від введеного настрою виводить на екран відповідний емодзі.
// Наприклад, якщо користувач вводить "щасливий", програма виводить на екран емодзі зі знаком усмішки 😊, якщо "сумний" - то емодзі зі сльозою 😢, якщо "злюсіль" - то емодзі з сердитим обличчям 😠 та ін.
// Для реалізації цієї задачі скористайся конструкцією switch.

const string = prompt("Який у вас настрій сьогодні?")
let emoji;
switch(string.toLowerCase()){
case("щасливий"):
emoji ="😊"
break
    case("сумний"):
    emoji ="😢"
    break
        case("злюсіль"):
        emoji = "😠"
        break
        default:
            emoji = "😐"
        }
alert(`Ваш настрій ${emoji}`)