//   Task 3:
//         Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
//         «Включительно» означает, что значение переменной age может быть равно 14 или 90.
//         Значение вводит пользователь
let age = +prompt("Enter your age");
if (age >= 14 && 90 >= age) {
  alert("Correct");
} else {
  alert("Error");
}
