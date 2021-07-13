var numero1 = parseInt(prompt("Ingresar un numero mayor a 0 "))
var numero2 = parseInt(prompt("Ingresar un numero mayor a 0 "))
 
var suma = (numero1 + numero2).toFixed(2)
var resta = (numero1 - numero2).toFixed(2)
var division = (numero1 / numero2).toFixed(2)
var multiplicacion = (numero1 *  numero2).toFixed(2)
var modulo = (numero1 % numero2).toFixed(2)
 
document.write(`suma: ${suma} <br><br>`)
document.write(`resta: ${resta} <br><br>`)  
document.write(`division: ${division} <br><br>`)
document.write(`multiplicacion: ${multiplicacion} <br><br>`)
document.write(`modulo: ${modulo} <br><br>`)