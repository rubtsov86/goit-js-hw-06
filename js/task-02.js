const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createNewElement = function (ingredient) {
  const newElement = document.createElement('li');
  newElement.textContent = ingredient;
  newElement.classList.add = '.item';
  return newElement;
}

const newElementsArray = ingredients.map(el => createNewElement(el));

document.querySelector('ul').append(...newElementsArray);

