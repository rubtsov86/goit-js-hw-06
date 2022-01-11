const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const changeOutput = function (event) {
    if (inputRef.value !== '') {
        outputRef.textContent = inputRef.value;
    } else {
        outputRef.textContent = 'Anonymous';
    }
    
}

inputRef.addEventListener('input',changeOutput)

