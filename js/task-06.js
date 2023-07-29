  
let inputEl = document.querySelector("#validation-input");
const inputLengh = inputEl.dataset.length;


inputEl.addEventListener("blur", borderColorChange) 
function borderColorChange() {
  if (inputEl.value.length == inputLengh) {
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