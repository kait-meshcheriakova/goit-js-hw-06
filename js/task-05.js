const elements = {
    inputVal: document.querySelector("#name-input"),
    outputVal: document.querySelector("#name-output")
};

elements.inputVal.addEventListener("input", hendlerSerch);
function hendlerSerch(evt) {
    elements.outputVal.textContent = evt.currentTarget.value || `Anonymous`;
  
}
