/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
 return number1 + number2; 
}

function addNumbers() {
    let firstNumber = parseFloat(document.querySelector("#add1").value);
    let secondNumber = parseFloat(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(firstNumber, secondNumber);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2; 
}

const subtractNumbers = function () {
    const number1 = parseFloat(document.querySelector("#subtract1").value);
    const number2 = parseFloat(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(number1, number2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2; 

const multiplyNumbers = () => {
    let firstNumber = parseFloat(document.querySelector("#factor1").value);
    let secondNumer = parseFloat(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply (firstNumber, secondNumer);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divde = function(dividend, divisor) {
    return dividend / divisor;
}

const divideNumbers = () => {
    let firstNumber = parseFloat(document.querySelector("#dividend").value);
    let secondNumber = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divde(firstNumber, secondNumber);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const subTotal = function () {
    let amount = parseFloat(document.querySelector("#subtotal").value);
        
    if (document.getElementById("member").checked) {
        amount = amount * 0.8
    }
    
    document.querySelector("#total").textContent = `${amount.toFixed(2)}`
}

document.querySelector("#getTotal").addEventListener("click", subTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").textContent = array;

/* Output Odds Only Array */
let oddArray = array.filter((x) => {
    r = x % 2;
    if (r !== 0) {
        return x;
    }
}); 

document.querySelector("#odds").textContent = oddArray;

/* Output Evens Only Array */
let evenArray = array.filter((x) => {
    r = x % 2;
    if (r === 0) {
        return x;
    }
});
document.querySelector("#evens").textContent = evenArray;

/* Output Sum of Org. Array */
let sumArray = array.reduce((firstNumber,secondNumber) => firstNumber + secondNumber);

document.querySelector("#sumOfArray").textContent = sumArray;

/* Output Multiplied by 2 Array */
let multiplyArray = array.map((number) => number *2);

document.querySelector("#multiplied").textContent = multiplyArray;

/* Output Sum of Multiplied by 2 Array */
let multiplySumArray = multiplyArray.reduce((firstNumber, secondNumber) => firstNumber + secondNumber);

document.querySelector("#sumOfMultiplied").textContent = multiplySumArray;