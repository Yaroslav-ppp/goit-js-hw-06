const categories = document.querySelectorAll(".item");

console.log("Number of categories:", categories.length);

categories.forEach((element) => {
  const getCategoriesTitle = element.querySelector("h2");
  const getElements = element.querySelectorAll("li");

  console.log("Category:", getCategoriesTitle.textContent);
  console.log("Elements:", getElements.length);
});
