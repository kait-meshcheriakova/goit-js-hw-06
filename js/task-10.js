function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainDiv = document.querySelector("#boxes");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const input = document.querySelector("#controls input");
function createBoxes(amount) {
  input.value = 0;

  let widthDiv = 20;
  let hightDiv = 20;

  let createDiv;
  
  for (let i = 1; i <= amount; i += 1) {
    createDiv = document.createElement("div");
    createDiv.style.width = (widthDiv += 10) + "px"
    createDiv.style.height = (hightDiv += 10) + "px"
    createDiv.style.background = getRandomHexColor()

    mainDiv.append(createDiv)
  }
  
}
btnCreate.addEventListener("click", function () {
  createBoxes(input.value);
});
btnDestroy.addEventListener("click", destroyBoxes )
function destroyBoxes() {
  mainDiv.innerHTML = ""
}