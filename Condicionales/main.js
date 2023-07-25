//let edad;
//edad = prompt("ingresa tu edad");
//console.log(edad);
//if (edad > 18) {
//  console.log("Es mayor de 18 años");
//} else {
//  console.log("Es menor a 18 años");
//}

let cantidad;
cantidad = prompt('Ingresar la cantidad')
let monedaOrigen;
monedaOrigen = prompt('Ingresar la moneda de Origen')
let monedaDestino;
monedaDestino = prompt('Ingresar la modeda Destino')

let resultado;

if(monedaOrigen === 'USD'){
 resultado = cantidad * 1.8;
}
else if(monedaOrigen === 'MXN'){
  resultado = cantidad * 0.5;
}
else if(monedaOrigen === 'EUR') { 
  resultado = cantidad * 1.9;
}
else {
  resultado = cantidad * 1.8
}

console.log(`La cantidad de ${cantidad} ${monedaOrigen} el cambio es ${resultado} ${monedaDestino}`);

  