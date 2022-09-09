/*Para cada número, se for divisível por 3 e 5, ou seja, i% 3 = 0 e i% 5 = 0e, em seguida, imprima “FizzBuzz”. Caso contrário, se o número for divisível por 3, ou seja, i% 3 = 0e, em seguida, imprima “Fizz”. Caso contrário, se o número for divisível por 5, ou seja, i% 5 = 0, imprima “Buzz”.

Divisível por 3 -> 'Fizz'
Divisível por 5 -> 'Buzz'
Divisível por 3 e 5 -> 'FizzBuzz'
Se não for um número -> 'NaN'
Se não for divisível nem por 3 e nem por 5 -> repete o valor inserido/entrada
*/

const FizzBuzz = (num) => {
  if ((num % 5) == 0 && (num % 3) == 0){
    return console.log("FizzBuzz");
  } else if ((num % 3) == 0){
    return console.log("Fizz"); 
  } else if ((num % 5) == 0){
    return console.log("Buzz"); 
  } else if(isNaN(num) || !num){
    return console.log("NaN"); 
  } else {
    return num
  }
}