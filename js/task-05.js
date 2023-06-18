// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  span: document.querySelector('#name-output'),
  textInput: document.querySelector("#name-input"),
};

refs.textInput.addEventListener("input", (event) => 
  (event.currentTarget.value) ? refs.span.textContent = event.currentTarget.value : refs.span.textContent = "Anonymous");