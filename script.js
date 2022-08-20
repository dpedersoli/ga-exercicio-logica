//Exercício 1:
let buttonAverage = document.getElementById('buttonAverage')

buttonAverage.addEventListener('click', function average (firstNumber, secondNumber) {

  firstNumber = document.getElementById('firstNumber').value
  secondNumber = document.getElementById('secondNumber').value

  if (isNaN(firstNumber) || !firstNumber || isNaN(secondNumber) || !secondNumber) {
    return document.getElementById("resultAverage").innerText = 'ERROR: Insert a number inside both inputs'
  }

  return document.getElementById("resultAverage").innerText = ( Number(firstNumber) + Number(secondNumber)) / 2
})

//Exercício 2:
let buttonOperator = document.getElementById('buttonOperator')

buttonOperator.addEventListener('click', function operator (firstNumber, secondNumber, operator) {

  firstNumber = document.getElementById('firstNumber').value
  secondNumber = document.getElementById('secondNumber').value
  operator = document.getElementById('operatorInput').value
  document.getElementById('operatorSign').innerText = operator

  if (operator == '+'){
    return document.getElementById("resultOperator").innerText = Number(firstNumber) + Number(secondNumber)
  } else if (operator == '-'){
    return document.getElementById("resultOperator").innerText = Number(firstNumber) - Number(secondNumber)
  } else if (operator == '*'){
    return document.getElementById("resultOperator").innerText = Number(firstNumber) * Number(secondNumber)
  } else if (operator == '/'){
    return document.getElementById("resultOperator").innerText = Number(firstNumber) / Number(secondNumber)
  } else {
    return document.getElementById("resultOperator").innerText = 'ERROR: chose one operator between: +, -, *, /'
  }

})

//Exercício 3 (console):
const oddOrEven = (num) => {
  if(num % 2 == 0){
    return `${num} is even`
  }
  return `${num} is odd`
}

console.log(oddOrEven(12));
console.log(oddOrEven(33));

//Exercício 4 (console):
const triangle = (number) => {
  let string = ''
  for (let linha = 1; linha <= number; linha++) {

    for(let coluna = 1; coluna <= linha; coluna++){ 
      string += "*";
    }

    string += "\n"
  }

  console.log(string + "\n");
}

triangle(5)

const invertedTriangle = (number) => {
  for (let row = 1; row <= number; row++) { 
    let invertedString = '*';

    for(let column = number; column > row; column--){ 
      invertedString += '*'; 
    }
    
    console.log(invertedString) 
  }
}

invertedTriangle(5)