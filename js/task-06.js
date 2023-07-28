  
let inputEl = document.querySelector("#validation-input");
const inputLenght = inputEl.dataset.length;

const input = document.querySelector("input");
inputEl.addEventListener("blur", (e) => {
  const text = e.target.value;
  text.length === +inputLenght ? inputEl.classList.add("valid") : inputEl.classList.add("invalid");
});