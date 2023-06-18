// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs ={
   inputValue: document.querySelector('#font-size-control'),
   spanText: document.querySelector('#text'),
}

function changeFont(e){
   refs.spanText.style.fontSize = e.currentTarget.value + 'px'
}

refs.inputValue.addEventListener('input', changeFont);