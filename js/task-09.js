const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanColor = document.querySelector(".color")
const changeColor = () => {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColor);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
