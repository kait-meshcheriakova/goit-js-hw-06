  
let inputEl = document.querySelector("#validation-input");
const inputLengh = Number(inputEl.dataset.length);


inputEl.addEventListener("blur", BorderColorDuringValidation) 
function BorderColorDuringValidation() {
  if (inputEl.value.length === inputLengh) {
    inputEl.classList.add('valid')
    inputEl.classList.remove('invalid')
  }
  else if (inputEl.value.length === 0) {
    inputEl.classList.remove('invalid')
    inputEl.classList.remove('valid')
  }
  else {
    inputEl.classList.add('invalid')
    }
  
  
}