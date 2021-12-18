const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let value = 0;
const setValue = (step) => {
  value += step;

  counter.textContent = value;
};

buttonDecrement.addEventListener("click", () => setValue(-1));
buttonIncrement.addEventListener("click", () => setValue(+1));
