//"reverse a string"
//imprima todo o texto inserido ao contrário (reverse)
//imprimir cada caractere em cada linha até formar a frase em 'reverse'
//ex.:
// o
// ol
// oll
// olle
// olleH

const reverseString = (str) => {
  if(typeof str !== 'string')
  {
    return console.error("Insert only 'string' characters")
  }

  let finalData = "";
 
  for (let i = str.length - 1; i >= 0; i--) { 
    console.log(finalData += str[i]);
  }

  return finalData

}

reverseString("Daniel")