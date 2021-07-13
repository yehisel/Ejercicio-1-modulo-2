var numeros1  = parseInt(prompt("ingrese un numero 1"));
var numeros2  = parseInt(prompt("ingrese un numero 2"));
var numeros3  = parseInt(prompt("ingrese un numero 3"));
var numeros4  = parseInt(prompt("ingrese un numero 4"));
var numeros5  = parseInt(prompt("ingrese un numero 5"));
var suma = (numeros1 + numeros2 + numeros3 + numeros4 + numeros5).toFixed(2);
var prom = (suma/5).toFixed(2);

document.write(`La suma de todos los números es: ${suma}  <br> <br>`) 
document.write(`El promedio de los 5 números ingresados es: ${prom}  <br> <br>`)

