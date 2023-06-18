// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs= {
  input: document.querySelector('input[type="number"]'),
  render: document.querySelectorAll('input[name="render"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  div: document.querySelector('#boxes'),
}
refs.btnCreate.addEventListener('click', onCreate);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function onCreate(){
  createBoxes(Number(refs.input.value));
}
function createBoxes(amount){
  let render;
  for (const el of refs.render) {
    if (el.checked){
      render=el.value
    }
  }
  let divs='';
  for (let i = 3; i < amount+3; i++) {
    if (render==='stk'){
      divs=`<div style="width: ${i*10}px; height: ${i*10}px; background-color: ${getRandomHexColor()};" class="box"></div>`+divs;
    }else{
      divs+=`<div style="width: ${i*10}px; height: ${i*10}px; background-color: ${getRandomHexColor()};"></div>`;
    }    
  };
  refs.div.classList.add('boxes');
  refs.div.insertAdjacentHTML('beforeend', divs);
}

function destroyBoxes(){
  refs.div.innerHTML=''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}