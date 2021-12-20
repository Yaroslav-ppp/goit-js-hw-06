const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBorderChange);
function onBorderChange(event) {
  const inputElLength = event.currentTarget.value.length;
  if (inputElLength !== Number(inputEl.dataset.length)) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
