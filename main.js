// HW 11 Task 1
// 1. Найти ссылку в футере и вывести в консоль
console.log(document.querySelector('footer > a'));

// HW 11 Task 2
// 2. Найти все ссылки внутри header__menu
console.log(document.querySelectorAll('.header__menu-link'));

// HW 11 Task 3
// 3. Найти все теги section и обработать полученную коллекцию с помощью цикла и для каждого элемента вывести сообщение «Нашел section»
let section = document.querySelectorAll('section');
console.log(section);

for (i = 0; i < section.length; i++) {
    console.log('Нашел section' + section[i]);
    console.log(section[i]);
}
