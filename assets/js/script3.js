var dias = prompt("Ingrese un cantidad de dias ");

var año = Math.floor(dias/365);
var semana =Math.floor(dias/7);
var diasdelaño =dias%365
var dia = diasdelaño%7;


document.write(`Dias Ingresados: ${dias}<br> <br>`)
document.write(`Años resultantes: ${año}<br> <br>`)
document.write(`Semanas resultantes: ${semana}<br> <br>`)
document.write(`Dias resultantes: ${dia}<br> <br>`)
