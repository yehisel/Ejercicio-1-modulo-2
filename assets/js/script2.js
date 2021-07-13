var celsius = parseInt(prompt("ingrese la temperatura en grados celsius"));

var kelvin = (celsius + 273.15);
var Fahrenheit = (celsius * 1.8) + (32)

document.write(`grados celsius corresponden a: ${kelvin} kelvin <br> <br>`)
document.write(`grados celsius corresponden a: ${Fahrenheit} fahrenheit <br> <br>`)