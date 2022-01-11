const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const newElementsArray = ingredients.map(el => {
  const newElement = document.createElement('li');
  newElement.textContent = el;
  newElement.classList.add = '.item';
  return newElement;
});

document.querySelector('ul').append(...newElementsArray);

