const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = { email, password };

  if (email.trim() === "" || password.trim() === "") {
    alert("All fields have to be filled!");
  }
  if (email.trim() !== "" && password.trim() !== "") {
    console.log(formData);

    form.reset();
  }
}
