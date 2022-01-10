const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');



const changeSize = function (event) {
    textRef.style.fontSize = `${inputRef.value}px`;
    return textRef.style.fontSize;
}



inputRef.addEventListener('input', changeSize);