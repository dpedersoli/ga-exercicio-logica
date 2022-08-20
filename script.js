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
  for (let row = 0; row <= number; row++) { 
    let string = '*';

    for(let column = 1; column <= row; column++){ 
      string += '*'; 
    }
    
    console.log(string) 
  }
}

triangle(5)

const invertedTriangle = (number) => {
  for (let row = 0; row <= number; row++) { 
    let invertedString = '*';

    for(let column = number; column > row; column--){ 
      invertedString += '*'; 
    }
    
    console.log(invertedString) 
  }
}

invertedTriangle(5)

//Exercício 5 - Desafio Denise (console)
// let mountainHeight = Number(window.prompt('Altura da montanha em metros (número inteiro): ', ''))

const climbMountain = (mountainHeight) => {

  let position = 0
  let jump = 1
  let bigJump = 4

  console.log(`The mountain height is ${mountainHeight} gaps ahead`)

  for (var i = 0; i < mountainHeight; i++) {
    if(position + 4 <= mountainHeight){
      position += bigJump
    } else if (position < mountainHeight) {
      position += jump
    } else if (position == mountainHeight) {
      break
    }

    console.log(position)
  }
  
  console.log(`The Climber took ${i} jumps to get to the top of the mountain`)
}

climbMountain(17)