const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const nameInput =
    event.currentTarget.value.trim() === ""
      ? (nameOutput.textContent = "Anonymous")
      : (nameOutput.textContent = event.currentTarget.value);
});
