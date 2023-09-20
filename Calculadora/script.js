let seleccion = 0;
let total;


function numeroFinal() {
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return numeroDos;
}
function obtenerNumeros() {
  let numeroUno = parseInt(prompt("Ingresa el numero "));
  let numeroDos = parseInt(prompt("Ingresa el numero "));
  return { numeroUno, numeroDos };
}

function suma() {
  if (!total) {
    const numeros = obtenerNumeros();
     total = numeros.numeroUno + numeros.numeroDos;
    console.log("El resultado de la suma es: " + total);
  } else {
    const nuevoNumero = numeroFinal();
    total = total + nuevoNumero
    console.log("El resultado de la suma es: " + total);
  }
}

function resta() {

  const numeros = obtenerNumeros();
  let resultado2 = numeros.numeroUno - numeros.numeroDos;
  console.log("El resultado de la resta es: " + resultado2);

  siguienteOperacion(resultado2)

}

function multiplicacion(numeroUno, numeroDos) {
  const numeros = obtenerNumeros();
  return numeros.numeroUno * numeros.numeroDos;
  //console.log(resultado3);
  //return resultado3;
}

function mostrarOperaciones() {
  console.log("1 suma ");
  console.log("2 resta");
  console.log("3 multiplicacion ");
}

function siguienteOperacion(x) {

  console.log("Cual es la siguiente operacion que desea realizar");

  mostrarOperaciones();
  mostrarSeleccion();

  const nuevoNumero = numeroFinal();
  const res = x - nuevoNumero
  console.log("El resultado es: " +res);

  siguienteOperacion()
}

function mostrarSeleccion() {
  seleccion = parseFloat(prompt("Ingresa el numero evaluacion "));
  return seleccion;
}

function operacionFinal() {
  if (seleccion === 1) console.log(suma());
  else if (seleccion === 2) console.log(resta());
  else if (seleccion === 2) console.log(multiplicacion());
}

while (seleccion < 4) {
  console.log("---Evaluaciones ---");
  mostrarOperaciones();
  console.log("4 Salir");  
  mostrarSeleccion()


  if (seleccion === 1) {
     suma()
    //console.log("El resultado es : " + resultado);
  } else if (seleccion === 2) {
    const resultado = resta();
    //console.log("El resultado es : " + resultado);
  } else if (seleccion === 3) {
    console.log("El resultado es : ", multiplicacion());
  } else if (seleccion === 4) {
    console.log("No se selecciono formula ");
  }



//  operacionFinal();
}
//function obtenerNumeros() {
//return {resultado}
