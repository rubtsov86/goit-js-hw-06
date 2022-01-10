const divArray = [];
let widthDiv = '30px';
let heightDiv = '30px';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');



const createBoxes = function (amount) {
  amount = Number(inputRef.value);
  console.log(amount);

  while (amount  > 0) {
  const newElement = document.createElement('div');
  newElement.style.width = widthDiv;
  newElement.style.height = heightDiv;
    newElement.style.backgroundColor = getRandomHexColor();
    
    divArray.push(newElement); 
    amount -= 1;
    widthDiv = `${parseInt(widthDiv) + 10}px`;
    heightDiv = `${parseInt(heightDiv)+10}px`;
    
}

  divBoxes.append(...divArray);
}

const destroyBoxes = function () {
  divBoxes.innerHTML = '';
}

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

