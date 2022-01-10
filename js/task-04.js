let counterValue = 0;

const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

const decrement = function(event) {
    counterValue -= 1;
    valueRef.textContent = `${counterValue}`;
    return counterValue;
}

const increment = function(event) {
    counterValue += 1;
    valueRef.textContent = `${counterValue}`;
    return counterValue;
}

btnDecrementRef.addEventListener('click', decrement);
btnIncrementRef.addEventListener('click', increment);







