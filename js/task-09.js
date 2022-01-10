function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');

const changeColor = function (event) {
  const currentColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentColor;
  textColorRef.textContent = currentColor;
}

btnChangeColorRef.addEventListener('click', changeColor)
