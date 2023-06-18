// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const refs = {
   decreaseBtn: document.querySelector('[data-action="decrement"]'),
   increaseBtn: document.querySelector('[data-action="increment"]'),
   counterSpan: document.querySelector('#value'),
}

const decrease = () => refs.counterSpan.textContent = --counterValue;
const increase = () => refs.counterSpan.textContent = ++counterValue;

refs.decreaseBtn.addEventListener("click", decrease);
refs.increaseBtn.addEventListener("click", increase);