const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");


for (const ingredient of ingredients) {
  const li = `<li class="item"> ${ingredient} </li>`
  list.insertAdjacentHTML("afterbegin", li).join('');
}
console.log(list)