// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

const textInput = document.querySelector("#validation-input");
const inputBlur = (e)=> {
   if (e.currentTarget.value.length===Number(e.currentTarget.dataset.length)){
      textInput.classList.add('valid');
      textInput.classList.remove('invalid');
   }else{
      textInput.classList.add('invalid');
      textInput.classList.remove('valid');
   }
}

textInput.addEventListener('blur', inputBlur);