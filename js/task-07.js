const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", (e) => {
  const size = input.value;
  text.style.fontSize = size + "px";
});