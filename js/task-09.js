// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs={
  body: document.querySelector('body'),
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

function onClick (){
  const color = getRandomHexColor();
  refs.body.style.backgroundColor=color;
  refs.span.textContent=color;
}

refs.btn.addEventListener('click', onClick);