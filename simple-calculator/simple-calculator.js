const display = document.getElementById('display');
const numbers = document.querySelectorAll('#number');
const operators = document.querySelectorAll('#operator');
const results = document.getElementById('result');
const clear = document.getElementById('clear');

let prevNumber = '';
let calculationOperator = '';
let currentNumber = 0;

const displayScreen = (number) => {
    display.value = number;
}

const inputNumber = (number) => {
    (currentNumber === 0) ? currentNumber = number : currentNumber += number;
}

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = 0;
}

const reset = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = 0;
}

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        displayScreen(currentNumber);
    })
})

clear.addEventListener('click', () => {
    reset();
    displayScreen(currentNumber);
})

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        inputOperator(event.target.value);
    })
})

results.addEventListener('click', () => {
    calculate();
    displayScreen(currentNumber);
})

const calculate = () => {
    let result = 0;
   
    currentNumber = 
        (calculationOperator === '+') ? result = prevNumber + currentNumber :
        (calculationOperator === '-') ? result = prevNumber - currentNumber :
        (calculationOperator === '*') ? result = prevNumber * currentNumber :
        (calculationOperator === '/') ? result = prevNumber / currentNumber : 
        (calculationOperator === '^') ? result = Math.pow(prevNumber, currentNumber) :
        0 ;
}