const spanEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", (event) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.style.background = color;
});
