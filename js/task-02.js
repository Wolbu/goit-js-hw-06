const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = ingredients.map(element => {
  const listEl = document.createElement('li')
  listEl.textContent = element
  listEl.classList.add('item')
  return listEl
});

console.log(list);

const ingr = document.querySelector('#ingredients');

ingr.append(...list);