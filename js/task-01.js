// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const numCategoriesRef = document.querySelectorAll('.item');
console.log('Number of categories: ', numCategoriesRef.length);

numCategoriesRef.forEach(el => {
   console.log('\nCategory: ', el.firstElementChild.outerText);
   console.log('Elements: ', el.lastElementChild.children.length);
});

// const listRef = document.querySelector('#categories');
// console.log('Number of categories: ', listRef.children.length);

// [...listRef.children].forEach(el => {
//    console.log('\nCategory: ', el.firstElementChild.outerText);
//    console.log('Elements: ', el.lastElementChild.children.length);
// });