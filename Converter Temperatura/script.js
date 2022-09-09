//"converter temperatura de célcius para fahrenheit"

const celsiusToFahrenheit = (celsius) => {

if (isNaN(celsius) || !celsius) {
  return console.error("Insira dados válidos (números)")
}

  return console.log(celsius * 9/5 + 32)

}

celsiusToFahrenheit(123)