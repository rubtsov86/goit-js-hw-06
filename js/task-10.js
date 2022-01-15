const divArray = [];
let sizeDiv = '30px';



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');



const createBoxes = function () {

  

  for (let amount = Number(inputRef.value); amount > 0; amount -= 1) {
  const newElement = document.createElement('div');
  newElement.style.width = sizeDiv;
  newElement.style.height = sizeDiv;
    newElement.style.backgroundColor = getRandomHexColor();
    
    divArray.push(newElement); 
    sizeDiv = `${parseInt(sizeDiv) + 10}px`;
    
  }
 

  divBoxes.append(...divArray);
  resetBoxes();
  
}

const resetBoxes = function () {
  inputRef.value = '';
  sizeDiv = '30px';
}

const destroyBoxes = function () {
  inputRef.value = '';
  divBoxes.innerHTML = '';
  divArray.splice(0, divArray.length);
}

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);

