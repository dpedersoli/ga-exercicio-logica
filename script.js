//Exercício 1:
let buttonAverage = document.getElementById('buttonAverage')

buttonAverage.addEventListener('click', function average (firstNumber, secondNumber) {

  firstNumber = document.getElementById('firstNumber').value
  secondNumber = document.getElementById('secondNumber').value

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