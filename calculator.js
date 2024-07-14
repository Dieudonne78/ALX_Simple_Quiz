function add() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = number1 + number2;
  document.getElementById('calculation-result').textContent = result;
  
}

function substract() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = number1 - number2;
  document.getElementById('calculation-result').textContent = result;
}

function divide() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = number1 / number2;
  document.getElementById('calculation-result').textContent = result;
}

function multiply() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
const number2 = parseFloat(document.getElementById('number2').value) || 0;
  const result = number1 * number2;
  document.getElementById('calculation-result').textContent = result;
}

let addButton = document.getElementById("add")

addButton.addEventListener('click',add)

let substractButton = document.getElementById("subtract")
substractButton.addEventListener('click',substract)

let divideButton = document.getElementById("divide")
divideButton.addEventListener('click',divide)

let multiplyButton = document.getElementById("multiply")
multiplyButton.addEventListener ('click',multiply)




