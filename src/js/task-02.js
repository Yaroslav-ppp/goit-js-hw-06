const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.classList.add("item");
  list.textContent = `${ingredient}`;

  return list;
});
ulIngredients.append(...elements);

